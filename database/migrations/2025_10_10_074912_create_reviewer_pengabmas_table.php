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
        Schema::create('reviewer_pengabmas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usulan_id');
            $table->string('reviewer1');
            $table->string('reviewer2');
            $table->enum('status', ['1', '2', '3']);
            $table->integer('jenis');
            $table->date('tanggal');
            $table->string('jenis_laporan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviewer_pengabmas');
    }
};