<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LaporanAkhirPenelitian extends Model
{
    use HasFactory;

    protected $table = 'laporan_akhir_penelitian';

    protected $fillable = [
        'judul_penelitian',
        'lama_penelitian',
        'lama_penelitian_riil',
        'file',
        'jenis_luaran',
        'jenis_luaran1',
        'jenis_luaran2',
        'jenis_luaran3',
        'luaran',
        'url',
        'pengguna_id',
        'tanggal',
        'status',
    ];
}