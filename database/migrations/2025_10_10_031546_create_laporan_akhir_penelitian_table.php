<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('laporan_akhir_penelitian', function (Blueprint $table) {
            $table->id();
            $table->string('judul_penelitian');
            $table->integer('lama_penelitian');
            $table->string('lama_penelitian_riil');
            $table->string('file');
            $table->string('jenis_luaran');
            $table->string('jenis_luaran1');
            $table->string('jenis_luaran2');
            $table->string('jenis_luaran3');
            $table->string('luaran');
            $table->string('url');
            $table->foreignId('pengguna_id')->index();
            $table->date('tanggal');
            $table->enum('status', ['1', '2', '3']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporan_akhir_penelitian');
    }
};