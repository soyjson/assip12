<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Petunjuk extends Model
{
    use HasFactory;

    protected $table = 'pengaturan';

    protected $fillable = [
        'petunjuk',
    ];
}