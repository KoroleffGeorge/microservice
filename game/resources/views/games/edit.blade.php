@extends('layouts.app')

@section('title', 'Редактирование игры')

@section('content')
    <div class="container">
        <h1>Редактирование игры</h1>

        <form action="{{ route('games.update', $game->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="homeTeam">Домашняя команда:</label>
                <input type="number" class="form-control" id="homeTeam" name="homeTeam" value="{{ $game->homeTeam }}" required>
                @error('homeTeam')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="guestTeam">Гостевая команда:</label>
                <input type="number" class="form-control" id="guestTeam" name="guestTeam" value="{{ $game->guestTeam }}" required>
                @error('guestTeam')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="score">Счет:</label>
                <input type="text" class="form-control" id="score" name="score" value="{{ $game->score }}">
                @error('score')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <button type="submit" class="btn btn-primary">Обновить</button>
        </form>
    </div>
@endsection