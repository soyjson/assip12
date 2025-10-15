<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LogbookPengabmas extends Model
{
    use HasFactory;

    protected $table = 'logbook_pengabmas';

    protected $fillable = [
        'usulan_id',
        'judul_kegiatan',
        'jenis_kegiatan',
        'tanggal',
        'catatan',
        'pengguna_id',
    ];
}