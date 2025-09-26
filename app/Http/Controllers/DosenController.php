<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DosenController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard", [
            "role" => "dosen"
        ]);
    }
    public function dataDosen()
    {
        return Inertia::render("DataDosen", [
            "role" => "dosen"
        ]);
    }
    public function usulanPenelitian()
    {
        return Inertia::render("UsulanPenelitian", [
            "role" => "dosen"
        ]);
    }
    public function usulanPengabmas()
    {
        return Inertia::render("UsulanPengabmas", [
            "role" => "dosen"
        ]);
    }
    public function laporanPenelitian()
    {
        return Inertia::render("UsulanPengabmas", [
            "role" => "dosen"
        ]);
    }
    public function laporanPengabmas()
    {
        return Inertia::render("UsulanPengabmas", [
            "role" => "dosen"
        ]);
    }


    public function hasilReview()
    {
        return Inertia::render("DataDosen", [
            "role" => "dosen"
        ]);
    }
}
