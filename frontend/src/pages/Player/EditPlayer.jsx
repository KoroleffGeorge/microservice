import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Pages/Edit.css'; // Импортируем стили

const EditPlayer = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: '', birthday: '', number: '', position: '',
    goals: '', assists: '', cleanSheet: '', team:''
  });

  useEffect(() => {
    // Получаем данные игрока по ID
    fetch(`http://localhost:8081/players/${playerId}`)
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching player:', error));
  }, [playerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8081/players/${playerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Игрок успешно обновлен!');
        navigate(`/players/${playerId}`); // Перенаправление на страницу деталей игрока
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при обновлении игрока.');
      });
  };

  return (
    <div className="edit">
      <h2>Редактирование игрока</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={player.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="birthday">Дата рождения:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={player.birthday}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Номер:</label>
          <input
          type="number"
          id="number"
          name="number"
          value={player.number}
          onChange={handleChange}
          required
          />
        </div>
        <div>
          <label htmlFor="position">Позиция:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={player.position}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="goals">Голы:</label>
          <input
            type="number"
            id="goals"
            name="goals"
            value={player.goals}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="assists">Ассисты:</label>
          <input
            type="number"
            id="assists"
            name="assists"
            value={player.assists}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cleanSheet">Сухие матчи:</label>
          <input
            type="number"
            id="cleanSheet"
            name="cleanSheet"
            value={player.cleanSheet}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="team">Команда:</label>
          <input
            type="number"
            id="team"
            name="team"
            value={player.team}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};

export default EditPlayer;
