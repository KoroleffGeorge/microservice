import React, { useState, useEffect } from 'react';
import '../../styles/Pages/Entities.css';
import { Link } from 'react-router-dom';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/players')
      .then(response => response.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div>
      <h1>Игроки</h1>
      <div className="entities-grid">
        {players.map(player => (
          <div className="entities-card" key={player.id}>
            <h2>{player.name}</h2>
            <p>Дата рождения: {player.birthday}</p>
            <p>Позиция: {player.position}</p>
            <p>Номер: {player.number}</p>
            <Link to={`/players/${player.id}`}> Смотреть детально</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
