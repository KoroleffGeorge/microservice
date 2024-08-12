import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages/Creation.css';

const CreateTeam = () => {
  const [name, setName] = useState('');
  const [dateOfFoundation, setDateOfFoundation] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [stadium, setStadium] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
      event.preventDefault();

       const teamData = { name, dateOfFoundation, city, budget, stadium};

      fetch('http://localhost:8082/teams', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(teamData),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              alert('Команда успешно создана!'); // Показываем alert
                      navigate('/teams'); // Переадресация на список игроков
              // Здесь можно добавить логику для обновления состояния или перенаправления
            })
            .catch ((error) => {
        console.error('Error creating team:', error);
        alert('Произошла ошибка при создании команды.'); // Показываем alert об ошибке
      });
    };

    return (
     <div className="creation-container">
          <h2>Создание команды</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Имя:</label>
               <input
                 type="text"
                 id="name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
               />
            </div>
            <div>
              <label htmlFor="dateOfFoundation">Дата создания:</label>
              <input
                type="date"
                id="dateOfFoundation"
                value={dateOfFoundation}
                onChange={(e) => setDateOfFoundation(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="city">Город:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <button type="submit">Создать команду</button>
          </form>
        </div>
      );
  };

  export default CreateTeam;