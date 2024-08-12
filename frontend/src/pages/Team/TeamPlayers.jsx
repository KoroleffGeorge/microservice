import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeamPlayers = () => {
  const { teamId } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8082/teams/${teamId}/players`)
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  }, [teamId]);

  if (!players.length) return <div>Загрузка ...</div>;

  return (
    <div>
      <h1>Игроки команды</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPlayers;
