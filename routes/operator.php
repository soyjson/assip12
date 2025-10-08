<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Grup route untuk user level 'operator'
Route::middleware(['auth', 'verified'])->prefix('operator')->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboardOperator');
    // Route lainnya..

});

// Route limit akses
Route::any('/operator/{any?}', function () {

    $user = Auth::user();
    // pengguna belum login atau bukan level akses
    if (! $user) {
        return redirect()->route('home');
    }

    if ($user->level !== 'operator') {
        return redirect()->route('dashboard' . ucfirst($user->level));
    }
    
    return redirect()->route('dashboardOperator');

})->where('any', '.*');