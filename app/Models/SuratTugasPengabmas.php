<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SuratTugasPengabmas extends Model
{
    use HasFactory;

    protected $table = 'surat_tugas_pengabmas';

    protected $fillable = [
        'logbook_pengabmas_id',
        'no_surat',
        'nama_ketua',
        'anggota_internal1',
        'anggota_internal2',
        'anggota_internal3',
        'anggota_internal4',
        'anggota_eksternal1',
        'anggota_eksternal2',
        'anggota_eksternal3',
        'anggota_eksternal4',
        'judul_pengabmas',
        'lama_pengabmas',
        'tanggal',
        'mahasiswa',
        'alumni',
        'admin',
        'afiliasi',
        'tempat',
        'transport',
        'afiliasi_internal1',
        'afiliasi_internal2',
        'afiliasi_internal3',
        'afiliasi_internal4',
        'afiliasi_eksternal1',
        'afiliasi_eksternal2',
        'afiliasi_eksternal3',
        'afiliasi_eksternal4',
        'afiliasi_mahasiswa',
        'afiliasi_alumni',
        'afiliasi_admin',
        'keperluan',
    ];
}