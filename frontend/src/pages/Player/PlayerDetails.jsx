import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Pages/Details.css'; // Импортируем стили

const PlayerDetails = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:8081/players/${playerId}`)
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching player:', error));
  }, [playerId]);

  const handleDelete = () => {
    fetch(`http://localhost:8081/players/${playerId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Игрок успешно удален!');
          navigate('/players'); // Перенаправление на список игроков
        } else {
          throw new Error('Ошибка при удалении игрока');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при удалении игрока.');
      });
  };

  if (!player) return <div>Загрузка ...</div>;

  return (
    <div className="details">
      <h1>{player.name}</h1>
      <p>Дата рождения: {player.birthday}</p>
      <p>Номер: {player.number}</p>
      <p>Позиция: {player.position}</p>
      <p>Голы: {player.goals}</p>
      <p>Ассисты: {player.assists}</p>
      <p>Сухие матчи: {player.cleanSheet}</p>
      <p>Команда: {player.team}</p>
      <button onClick={() => navigate(`/edit-player/${playerId}`)}>Редактировать</button>
      <button onClick={handleDelete}>Удалить игрока</button>
    </div>
  );
};

export default PlayerDetails;
