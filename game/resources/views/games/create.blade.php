@extends('layouts.app')

@section('title', 'Добавление новой игры')

@section('content')
    <div class="container">
        <h1>Добавление новой игры</h1>

        <form action="{{ route('games.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="homeTeam">Домашняя команда:</label>
                <input type="number" class="form-control" id="homeTeam" name="homeTeam" required>
                @error('homeTeam')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="guestTeam">Гостевая команда:</label>
                <input type="number" class="form-control" id="guestTeam" name="guestTeam" required>
                @error('guestTeam')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="score">Счет:</label>
                <input type="text" class="form-control" id="score" name="score">
                @error('score')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <button type="submit" class="btn btn-primary">Сохранить</button>
        </form>
    </div>
@endsection
