<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TeamController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/games', [GameController::class, 'index'])->name('games.index');
Route::post('/games', [GameController::class, 'store'])->name('games.store');
Route::get('/games/create', [GameController::class, 'create'])->name('games.create');
Route::get('/games/{id}', [GameController::class, 'show'])->name('games.show');
Route::get('/games/{id}/edit', [GameController::class, 'edit'])->name('games.edit'); // Новый маршрут для редактирования
Route::put('/games/{id}', [GameController::class, 'update'])->name('games.update'); // Маршрут для обновления (PUT)

Route::delete('/games/{id}', [GameController::class, 'destroy'])->name('games.destroy'); // Маршрут для удаления (DELETE)
Route::get('/teams/{id}', [TeamController::class, 'getTeam']);

Route::get('/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});
