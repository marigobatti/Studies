<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;

class SeriesController extends Controller
{
    function index(Request $req)
    {
        $series = [
            'Grey\'s Anatomy',
            'Lost',
            'Agents of Shield'
        ];

        return view('series.index', compact('series'));
    }

    public function create()
    {
        return view('series.create');
    }
}
