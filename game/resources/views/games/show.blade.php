@extends('layouts.app')

@section('title', 'Информация о игре')

@section('content')
    <div class="container">
        <h1>Информация о игре</h1>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Домашняя команда: {{ $game->homeTeam }}</h5>
                <h5 class="card-title">Гостевая команда: {{ $game->guestTeam }}</h5>
                <p class="card-text">Счет: {{ $game->score }}</p>
            </div>
        </div>
        <form action="{{ route('games.destroy', $game->id) }}" method="POST" style="display: inline-block;">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger" onclick="return confirm('Вы уверены, что хотите удалить эту игру?')">Удаление</button>
        </form>
        <form action="{{ route('games.edit', $game->id) }}"  method="PUT" style="display: inline-block;">
            @csrf
            @method('PUT')
            <button type="submit" class="btn btn-danger" onclick="return confirm('Вы уверены, что хотите изменить данные об игре?')">Редактирование</button>
        </form>
    </div>
@endsection
