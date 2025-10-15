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
        Schema::create('surat_tugas_pengabmas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('logbook_pengabmas_id');
            $table->string('no_surat');
            $table->string('nama_ketua');
            $table->string('anggota_internal1');
            $table->string('anggota_internal2');
            $table->string('anggota_internal3');
            $table->string('anggota_internal4');
            $table->string('anggota_eksternal1');
            $table->string('anggota_eksternal2');
            $table->string('anggota_eksternal3');
            $table->string('anggota_eksternal4');
            $table->string('judul_pengabmas');
            $table->string('lama_pengabmas');
            $table->date('tanggal');
            $table->string('mahasiswa');
            $table->string('alumni');
            $table->string('admin');
            $table->string('afiliasi');
            $table->string('tempat');
            $table->string('transport');
            $table->string('afiliasi_internal1');
            $table->string('afiliasi_internal2');
            $table->string('afiliasi_internal3');
            $table->string('afiliasi_internal4');
            $table->string('afiliasi_eksternal1');
            $table->string('afiliasi_eksternal2');
            $table->string('afiliasi_eksternal3');
            $table->string('afiliasi_eksternal4');
            $table->string('afiliasi_mahasiswa');
            $table->string('afiliasi_alumni');
            $table->string('afiliasi_admin');
            $table->string('keperluan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('surat_tugas_pengabmas');
    }
};