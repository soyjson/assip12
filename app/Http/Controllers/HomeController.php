<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index()
    {
        $gg = "hello";
        return Inertia::render("Berita", ['gg' => $gg]);
    }
}
