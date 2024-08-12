<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Футбольные менеджер')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <header>
        <h1>Футбольный менеджер</h1>
        <nav>
            <ul>
                <li><a href="{{ url('/games') }}">Главная</a></li>
                <li><a href="{{ url('/about') }}">О нас</a></li>
                <li><a href="{{ url('/contact') }}">Контакты</a></li>
                <li><a href="{{ url('/games/create') }}">Добавить матч</a></li>
            </ul>
        </nav>
    </header>

    <div class='content'>
        @yield('content')
    </div>

    <footer>
        <p>&copy; {{ date('Y') }} My Application</p>
    </footer>
</body>
</html>
