<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Grup route untuk user level 'reviewer'
Route::middleware(['auth', 'verified'])->prefix('reviewer')->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboardReviewer');
    // Route lainnya..

});

// Route limit akses
Route::any('/reviewer/{any?}', function () {

    $user = Auth::user();
    // pengguna belum login atau bukan level akses
    if (! $user) {
        return redirect()->route('home');
    }

    if ($user->level !== 'reviewer') {
        return redirect()->route('dashboard' . ucfirst($user->level));
    }
    
    return redirect()->route('dashboardReviewer');

})->where('any', '.*');