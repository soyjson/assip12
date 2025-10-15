<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Unduhan extends Model
{
    use HasFactory;

    protected $table = 'unduhan';

    protected $fillable = [
        'file',
        'keterangan',
        'tanggal',
        'jenis_file',
    ];
}