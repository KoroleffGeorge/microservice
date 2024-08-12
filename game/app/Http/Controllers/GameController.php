<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function index() 
    {
        $games = Game::all();
        return view('games.index', compact('games'));
        //return response()->json($games);
    }

    public function create()
    {
        return view('games.create');
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'homeTeam' => 'required|integer|min:0',
            'guestTeam' => 'required|integer|min:0',
            'score' => 'nullable|regex:/^(?:\d{1,2}\s*:\s*\d{1,2})?$/',
        ]);

        $game = Game::create($validateData);
        return redirect()->route('games.index')->with('success', 'Игра успешно добавлена!');
    }

    public function show($id)
    {
        $game = Game::find($id);
        $TeamController = new TeamController;
        
        $homeTeamData = $TeamController->getTeam($game->homeTeam);
        $game->homeTeam = isset($homeTeamData['name']) ? $homeTeamData['name'] : 'Unknown';
        $guestTeamData = $TeamController->getTeam($game->guestTeam);
        $game->guestTeam = isset($guestTeamData['name']) ? $guestTeamData['name'] : 'Unknown';

        return view('games.show', compact('game'));
    }

    public function edit($id)
    {
        $game = Game::find($id);
        return view('games.edit', compact('game'));
    }

    public function update(Request $request, $id)
    {
        $validateData = $request->validate([
            'homeTeam' => 'required|integer|min:0',
            'guestTeam' => 'required|integer|min:0',
            'score' => 'nullable|regex:/^(?:\d{1,2}\s*:\s*\d{1,2})?$/',
        ]);

        $game = Game::find($id);
        $game->update($validateData);

        return redirect()->route('games.index')->with('success', 'Игра успешно обновлена!');
    }

    public function destroy($id)
    {
        $game = Game::find($id);
        $game->delete();

        return redirect()->route('games.index')->with('success', 'Игра успешно удалена!');
    }
}
