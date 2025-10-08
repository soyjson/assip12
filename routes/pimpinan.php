<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Grup route untuk user level 'pimpinan'
Route::middleware(['auth', 'verified'])->prefix('pimpinan')->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboardPimpinan');
    // Route lainnya..

});

// Route limit akses
Route::any('/pimpinan/{any?}', function () {

    $user = Auth::user();
    // pengguna belum login atau bukan level akses
    if (! $user) {
        return redirect()->route('home');
    }

    if ($user->level !== 'pimpinan') {
        return redirect()->route('dashboard' . ucfirst($user->level));
    }
    
    return redirect()->route('dashboardPimpinan');

})->where('any', '.*');