<?php

use App\Http\Controllers\Dosen\DashboardController;
use App\Http\Controllers\Dosen\DataDosenController;
use App\Http\Controllers\Dosen\LaporanAkhirPenelitianController;
use App\Http\Controllers\Dosen\LaporanAkhirPengabmasController;
use App\Http\Controllers\Dosen\LaporanKemajuanPenelitianController;
use App\Http\Controllers\Dosen\LaporanKemajuanPengabmasController;
use App\Http\Controllers\Dosen\LogbookPenelitianController;
use App\Http\Controllers\Dosen\LogbookPengabdianController;
use App\Http\Controllers\Dosen\ReviewController;
use App\Http\Controllers\Dosen\UsulanPenelitianController;
use App\Http\Controllers\Dosen\UsulanPengabdianController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Route::resource('post', DosenController::class)->only(['index', 'show', 'store']);
Route::middleware(['auth', 'verified'])->prefix('dosen')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('data-dosen', DataDosenController::class)->only(['index', 'store', 'update']);
    Route::resource('usulan-penelitian', UsulanPenelitianController::class);
    Route::resource('usulan-pengabmas', UsulanPengabdianController::class);
    // Route::resource('laporan-penelitian/laporan-kemajuan', LaporanKemajuanPenelitianController::class);
    // Route::resource('laporan-penelitian/laporan-akhir', LaporanAkhirPenelitianController::class);
    // Route::resource('laporan-pengabmas/laporan-kemajuan', LaporanKemajuanPengabmasController::class);
    // Route::resource('laporan-pengabmas/laporan-akhir', LaporanAkhirPengabmasController::class);
    Route::prefix('laporan-penelitian')->group(function () {
        Route::resource('laporan-kemajuan', LaporanKemajuanPenelitianController::class)
            ->names('laporanPenelitian.kemajuan');

        Route::resource('laporan-akhir', LaporanAkhirPenelitianController::class)
            ->names('laporanPenelitian.akhir');
    });
    Route::prefix('laporan-pengabmas')->group(function () {
        Route::resource('laporan-kemajuan', LaporanKemajuanPengabmasController::class)
            ->names('laporanPengabmas.kemajuan');

        Route::resource('laporan-akhir', LaporanAkhirPengabmasController::class)
            ->names('laporanPengabmas.akhir');
    });
    Route::resource('logbook-penelitian', LogbookPenelitianController::class);
    Route::resource('logbook-pengabmas', LogbookPengabdianController::class);
    Route::resource('review', ReviewController::class)->only(['index', 'show']);
});

// Route::get('/', [HomeController::class, "index"])->name("gg");

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
