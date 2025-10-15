<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pengaturan extends Model
{
    use HasFactory;

    protected $table = 'pengaturan';

    protected $fillable = [
        'nama_instansi',
        'lembaga',
        'nama_lembaga',
        'ketua_lembaga',
        'ketua_nik',
        'logo',
        'alamat',
        'kota',
        'telepon',
        'email',
        'website',
    ];
}