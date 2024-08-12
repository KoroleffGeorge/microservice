import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Players from './pages/Player/Players';
import Teams from './pages/Team/Teams'
import './styles/Header.css'; // Подключите стили, если необходимо

const Header = () => {
  return (
    <header className="app-header">
      <h1>Футбольный менеджер</h1>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/players">Игроки</Link></li>
          <li><Link to="/teams">Команды</Link></li>
          <li><Link to="/player-creation">Добавить игрока</Link></li>
          <li><Link to="/team-creation">Добавить команду</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;