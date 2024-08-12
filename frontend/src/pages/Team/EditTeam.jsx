import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Pages/Edit.css'; // Импортируем стили

const EditTeam = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState({
    name: '', dateOfFoundation: '', city: '', budget: '', stadium: ''
  });

  useEffect(() => {
    // Получаем данные игрока по ID
    fetch(`http://localhost:8082/teams/${teamId}`)
      .then(response => response.json())
      .then(data => setTeam(data))
      .catch(error => console.error('Error fetching team:', error));
  }, [teamId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/teams/${teamId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(team),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Команда успешно обновлена!');
        navigate(`/teams/${teamId}`); // Перенаправление на страницу деталей игрока
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при обновлении команды.');
      });
  };

  return (
    <div className="edit">
      <h2>Редактирование команды</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={team.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfFoundation">Дата создания:</label>
          <input
            type="date"
            id="dateOfFoundation"
            name="dateOfFoundation"
            value={team.dateOfFoundation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Город:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={team.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="budget">Бюджет:</label>
          <input
          type="number"
          id="budget"
          name="budget"
          value={team.budget}
          onChange={handleChange}
          required
          />
        </div>
        <div>
          <label htmlFor="stadium">Стадион:</label>
          <input
            type="text"
            id="stadium"
            name="stadium"
            value={team.stadium}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};

export default EditTeam;
