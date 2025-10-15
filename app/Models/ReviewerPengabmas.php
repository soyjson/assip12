<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ReviewerPengabmas extends Model
{
    use HasFactory;

    protected $table = 'reviewer_pengabmas';

    protected $fillable = [
        'usulan_id',
        'reviewer1',
        'reviewer2',
        'status',
        'jenis',
        'tanggal',
        'jenis_laporan',
    ];
}