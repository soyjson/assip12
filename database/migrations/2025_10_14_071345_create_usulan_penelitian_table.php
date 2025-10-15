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
        Schema::create('usulan_penelitian', function (Blueprint $table) {
            $table->id();
            $table->string('nama_ketua');
            $table->string('anggota_internal1');
            $table->string('anggota_internal2');
            $table->string('anggota_internal3');
            $table->string('anggota_internal4');
            $table->string('anggota_external1');
            $table->string('anggota_external2');
            $table->string('anggota_external3');
            $table->string('anggota_external4');
            $table->text('judul_penelitian');
            $table->string('file');
            $table->string('jenis_penelitian');
            $table->string('nama_institusi');
            $table->string('alamat');
            $table->integer('tahun_pelaksanaan');
            $table->integer('biaya_mandiri');
            $table->integer('biaya_hibah_pt');
            $table->integer('biaya_hibah_luar');
            $table->string('pemberi_hibah_luar');
            $table->foreignId('pengguna_id');
            $table->date('tanggal');
            $table->enum('status', ['1', '2', '3']);
            $table->integer('user_confirm');
            $table->string('luaran_wajib');
            $table->string('luaran_tambahan');
            $table->string('mahasiswa');
            $table->string('alumni');
            $table->string('admin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usulan_penelitian');
    }
};