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
        Schema::create('tanggapan_penelitian', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usulan_id');
            $table->foreignId('reviewer_penelitian_id');
            $table->longText('tanggapan');
            $table->string('file');
            $table->integer('nilai_1');
            $table->integer('nilai_2');
            $table->integer('nilai_3');
            $table->integer('nilai_4');
            $table->integer('nilai_5');
            $table->integer('nilai_6');
            $table->date('tanggal');
            $table->enum('status', ['1', '2', '3']);
            $table->string('jenis_laporan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tanggapan_penelitian');
    }
};