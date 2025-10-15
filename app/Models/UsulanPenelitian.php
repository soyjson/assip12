<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UsulanPenelitian extends Model
{
    use HasFactory;

    protected $table = 'usulan_penelitian';

    protected $fillable = [
        'nama_ketua',
        'anggota_internal1',
        'anggota_internal2',
        'anggota_internal3',
        'anggota_internal4',
        'anggota_external1',
        'anggota_external2',
        'anggota_external3',
        'anggota_external4',
        'judul_penelitian',
        'file',
        'jenis_penelitian',
        'nama_institusi',
        'alamat',
        'tahun_pelaksanaan',
        'biaya_mandiri',
        'biaya_hibah_pt',
        'biaya_hibah_luar',
        'pemberi_hibah_luar',
        'pengguna_id',
        'tanggal',
        'status',
        'user_confirm',
        'luaran_wajib',
        'luaran_tambahan',
        'mahasiswa',
        'alumni',
        'admin',
    ];
}