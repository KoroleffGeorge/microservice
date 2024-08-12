import React, { useState, useEffect } from 'react';
import '../../styles/Pages/Entities.css';
import { Link } from 'react-router-dom';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div>
      <h1>Команды</h1>
      <div className="entities-grid">
        {teams.map(team => (
          <div className="entities-card" key={team.id}>
            <h2>{team.name}</h2>
            <p>Дата создания: {team.dateOfFoundation}</p>
            <p>Город: {team.city}</p>
            <Link to={`/teams/${team.id}`}> Смотреть детально</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;