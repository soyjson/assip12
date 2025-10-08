<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Grup route untuk user level 'admin'
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboardAdmin');
    // Route lainnya..

});

// Route limit akses
Route::any('/admin/{any?}', function () {

    $user = Auth::user();
    // pengguna belum login atau bukan level akses
    if (! $user) {
        return redirect()->route('home');
    }

    if ($user->level !== 'admin') {
        return redirect()->route('dashboard' . ucfirst($user->level));
    }
    
    return redirect()->route('dashboardAdmin');

})->where('any', '.*');