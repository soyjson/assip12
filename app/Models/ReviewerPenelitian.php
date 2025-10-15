<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ReviewerPenelitian extends Model
{
    use HasFactory;

    protected $table = 'reviewer_penelitian';

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