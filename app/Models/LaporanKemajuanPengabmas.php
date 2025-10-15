<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LaporanKemajuanPengabmas extends Model
{
    use HasFactory;

    protected $table = 'laporan_kemajuan_pengabmas';

    protected $fillable = [
        'judul_pengabmas',
        'presentase_kemajuan',
        'file',
        'url',
        'jenis_berkas',
        'pengguna_id',
        'tanggal',
        'status',
    ];
}