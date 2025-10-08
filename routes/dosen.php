<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Grup route untuk user level 'dosen'
Route::middleware(['auth', 'verified'])->prefix('dosen')->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboardDosen');
    // Route lainnya..

});

// Route limit akses
Route::any('/dosen/{any?}', function () {

    $user = Auth::user();
    // pengguna belum login atau bukan level akses
    if (! $user) {
        return redirect()->route('home');
    }

    if ($user->level !== 'dosen') {
        return redirect()->route('dashboard' . ucfirst($user->level));
    }
    
    return redirect()->route('dashboardDosen');

})->where('any', '.*');