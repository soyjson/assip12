<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TanggapanPengabmas extends Model
{
    use HasFactory;

    protected $table = 'tanggapan_pengabmas';

    protected $fillable = [
        'usulan_id',
        'reviewer_pengabmas_id',
        'tanggapan',
        'file',
        'nilai_1',
        'nilai_2',
        'nilai_3',
        'nilai_4',
        'nilai_5',
        'nilai_6',
        'tanggal',
        'status',
        'jenis_laporan',
    ];
}