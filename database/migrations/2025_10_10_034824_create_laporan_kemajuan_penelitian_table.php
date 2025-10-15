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
        Schema::create('laporan_kemajuan_penelitian', function (Blueprint $table) {
            $table->id();
            $table->string('judul_penelitian');
            $table->integer('presentase_kemajuan');
            $table->string('file');
            $table->string('url');
            $table->string('jenis_berkas');
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
        Schema::dropIfExists('laporan_kemajuan_penelitian');
    }
};