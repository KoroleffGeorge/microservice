import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Pages/Details.css'; // Импортируем стили

const TeamDetails = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:8082/teams/${teamId}`)
      .then(response => response.json())
      .then(data => setTeam(data))
      .catch(error => console.error('Error fetching team:', error));
  }, [teamId]);

  const handleDelete = () => {
    fetch(`http://localhost:8082/teams/${teamId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Команда успешно удалена!');
          navigate('/teams'); // Перенаправление на список игроков
        } else {
          throw new Error('Ошибка при удалении команды');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при удалении команды.');
      });
  };

  if (!team) return <div>Загрузка ...</div>;

  return (
    <div className="details">
      <h1>{team.name}</h1>
      <p>Дата создания: {team.dateOfFoundation}</p>
      <p>Город: {team.city}</p>
      <p>Бюджет: {team.budget}</p>
      <p>Стадион: {team.stadium}</p>
      <button onClick={() => navigate(`/edit-team/${teamId}`)}>Редактировать</button>
      <button onClick={handleDelete}>Удалить команду</button>
      <button onClick={() => navigate(`/teams/${teamId}/players`)}>Список игроков</button>
    </div>
  );
};

export default TeamDetails;
