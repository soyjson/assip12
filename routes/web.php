<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Beranda
Route::get('/', [HomeController::class, 'index'])->name('home');

// Route pengguna
require __DIR__ . '/auth.php';
require __DIR__ . '/settings.php';

// List route hak akses
require __DIR__ . '/admin.php';
require __DIR__ . '/pimpinan.php';
require __DIR__ . '/operator.php';
require __DIR__ . '/dosen.php';
require __DIR__ . '/reviewer.php';

// Route fallback 404
Route::fallback(function () {
    return redirect()->route('home');
});