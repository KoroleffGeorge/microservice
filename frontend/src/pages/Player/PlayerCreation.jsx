import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages/Creation.css';

const CreatePlayer = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');
  const [goals, setGoals] = useState('');
  const [assists, setAssists] = useState('');
  const [cleanSheet, setCleanSheet] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
      event.preventDefault();

       const playerData = { name, birthday, number, position, goals, assists, cleanSheet};

      fetch('http://localhost:8081/players', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              alert('Игрок успешно создан!'); // Показываем alert
                      navigate('/players'); // Переадресация на список игроков
              // Здесь можно добавить логику для обновления состояния или перенаправления
            })
            .catch ((error) => {
        console.error('Error creating player:', error);
        alert('Произошла ошибка при создании игрока.'); // Показываем alert об ошибке
      });
    };

    return (
     <div className="creation-container">
          <h2>Создание игрока</h2>
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
              <label htmlFor="birthday">Дата рождения:</label>
              <input
                type="date" // Изменено на 'date' для выбора даты
                id="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="position">Позиция:</label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <button type="submit">Создать игрока</button>
          </form>
        </div>
      );
  };

  export default CreatePlayer;