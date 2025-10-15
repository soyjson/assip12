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
        Schema::create('logbook_pengabmas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usulan_id');
            $table->string('judul_kegiatan');
            $table->string('jenis_kegiatan');
            $table->date('tanggal');
            $table->text('catatan');
            $table->foreignId('pengguna_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logbook_pengabmas');
    }
};