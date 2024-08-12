@extends('layouts.app')

@section('title', 'Список игр')

@section('content')
    <div class="container">
        <h1>Список игр</h1>

        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <table class="table">
            <thead>
                <tr>
                    <th>Домашняя команда</th>
                    <th>Гостевая команда</th>
                    <th>Счет</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($games as $game)
                    <tr>
                        <td>{{ $game->homeTeam }}</td>
                        <td>{{ $game->guestTeam }}</td>
                        <td>{{ $game->score }}</td>
                        <td>
                            <a href="{{ route('games.show', $game->id) }}" class="btn btn-primary">Просмотр</a>
                            
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection