<?php

namespace Database\Seeders;

use App\Models\Pengguna;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PenggunaSeeder extends Seeder
{
    public function run(): void
    {

        // Seeder data pengguna level admin
        Pengguna::create([
            'name' => 'Administrator',
            'nik' => '11223344556677889900',
            'nidn' => '',
            'phone' => '081234567890',
            'email' => 'admin@polimedia.ac.id',
            'username' => 'admin',
            'password' => Hash::make('password123'),
            'level' => 'admin',
            'foto' => '',
            'jafung' => 'Administrator',
            'institusi' => 'Polimedia',
            'fakultas' => '',
            'prodi' => '',
        ]);

        // Seeder data pengguna level pimpinan
        Pengguna::create([
            'name' => 'Pimpinan',
            'nik' => '11223344556677889900',
            'nidn' => '',
            'phone' => '081234567890',
            'email' => 'pimpinan@polimedia.ac.id',
            'username' => 'pimpinan',
            'password' => Hash::make('password123'),
            'level' => 'pimpinan',
            'foto' => '',
            'jafung' => 'Pimpinan',
            'institusi' => 'Polimedia',
            'fakultas' => '',
            'prodi' => '',
        ]);

        // Seeder data pengguna level operator
        Pengguna::create([
            'name' => 'Operator',
            'nik' => '11223344556677889900',
            'nidn' => '',
            'phone' => '081234567890',
            'email' => 'operator@polimedia.ac.id',
            'username' => 'operator',
            'password' => Hash::make('password123'),
            'level' => 'operator',
            'foto' => '',
            'jafung' => 'Operator',
            'institusi' => 'Polimedia',
            'fakultas' => '',
            'prodi' => '',
        ]);

        // Seeder data pengguna level dosen
        Pengguna::create([
            'name' => 'Dosen',
            'nik' => '11223344556677889900',
            'nidn' => '12345',
            'phone' => '081234567890',
            'email' => 'dosen@polimedia.ac.id',
            'username' => 'dosen',
            'password' => Hash::make('password123'),
            'level' => 'dosen',
            'foto' => '',
            'jafung' => 'Dosen',
            'institusi' => 'Polimedia',
            'fakultas' => 'Komunikasi dan Seni',
            'prodi' => 'Desain Komunikasi Visual',
        ]);

        // Seeder data pengguna level reviewer
        Pengguna::create([
            'name' => 'Reviewer',
            'nik' => '11223344556677889900',
            'nidn' => '12345',
            'phone' => '081234567890',
            'email' => 'reviewer@polimedia.ac.id',
            'username' => 'reviewer',
            'password' => Hash::make('password123'),
            'level' => 'reviewer',
            'foto' => '',
            'jafung' => 'Reviewer',
            'institusi' => 'Polimedia',
            'fakultas' => 'Komunikasi dan Seni',
            'prodi' => 'Desain Komunikasi Visual',
        ]);

    }
}