<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LaporanKemajuanPenelitian extends Model
{
    use HasFactory;

    protected $table = 'laporan_kemajuan_penelitian';

    protected $fillable = [
        'judul_penelitian',
        'presentase_kemajuan',
        'file',
        'url',
        'jenis_berkas',
        'pengguna_id',
        'tanggal',
        'status',
    ];
}