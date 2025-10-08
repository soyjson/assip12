<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Autentikasi dan regenerate session
        $request->authenticate();
        $request->session()->regenerate();

        $user = $request->user();
        if (! $user) {
            return redirect()->route('login');
        }

        // mapping level => route name
        $routes = [
            'admin'     => 'dashboardAdmin',
            'pimpinan'  => 'dashboardPimpinan',
            'operator'  => 'dashboardOperator',
            'dosen'     => 'dashboardDosen',
            'reviewer'  => 'dashboardReviewer',
        ];

        $level = strtolower(trim((string) ($user->level ?? '')));
        $routeName = $routes[$level] ?? 'dashboard';

        // redirect ke intended (jika ada), kalau tidak ada fallback ke route yang sesuai
        return redirect()->intended(route($routeName));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}