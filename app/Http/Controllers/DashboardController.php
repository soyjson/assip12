<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        if (! $user) {
            return redirect()->route('login');
        }

        // mapping view per level
        $views = [
            'admin'    => 'Dashboard/DashboardAdmin',
            'pimpinan' => 'Dashboard/DashboardAdmin',
            'operator' => 'Dashboard/DashboardReviewer',
            'dosen'    => 'Dashboard/DashboardDosen',
            'reviewer' => 'Dashboard/DashboardReviewer',
        ];

        $level = strtolower(trim((string) ($user->level ?? '')));

        // prefix yang diharapkan untuk tiap role (bisa disesuaikan)
        $rolePrefixes = [
            'admin'    => 'admin',
            'pimpinan' => 'pimpinan',
            'operator' => 'operator',
            'dosen'    => 'dosen',
            'reviewer' => 'reviewer',
        ];

        // nama route dashboard untuk redirect ketika role tidak cocok
        $dashboardRoutes = [
            'admin'    => 'dashboardAdmin',
            'pimpinan' => 'dashboardPimpinan',
            'operator' => 'dashboardOperator',
            'dosen'    => 'dashboardDosen',
            'reviewer' => 'dashboardReviewer',
        ];

        // ambil prefix pertama dari path yang diminta, contoh: 'dosen' dari 'dosen/dashboard'
        $prefix = explode('/', trim($request->path(), '/'))[0] ?? null;

        // jika request berada di prefix yang bukan milik role user -> redirect ke dashboard role-nya
        if ($prefix && isset($rolePrefixes[$level]) && $rolePrefixes[$level] !== $prefix) {
            // redirect ke dashboard milik user (atau ubah jadi ->route('home') jika mau ke home)
            $routeName = $dashboardRoutes[$level] ?? 'home';
            return redirect()->route($routeName);
        }

        // render sesuai role
        if (array_key_exists($level, $views)) {
            return Inertia::render($views[$level], ['role' => $level]);
        }

        abort(403, 'Unauthorized: unknown user level');
    }
}