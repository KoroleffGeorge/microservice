import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Players from './pages/Player/Players';
import PlayerDetails from './pages/Player/PlayerDetails';
import PlayerCreation from './pages/Player/PlayerCreation';
import EditPlayer from './pages/Player/EditPlayer';
import Teams from './pages/Team/Teams';
import TeamDetails from './pages/Team/TeamDetails';
import TeamCreation from './pages/Team/TeamCreation';
import EditTeam from './pages/Team/EditTeam';
import TeamPlayers from './pages/Team/TeamPlayers';
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Добро пожаловать в мир футбола!</h2>
              <p>
                Футбол – это больше, чем просто спорт. Это страсть, объединяющая миллионы людей по всему миру.
              </p>
              <p>
                Что такое футбол?
                Футбол – это командная игра, где две команды из 11 игроков борются за контроль над мячом, чтобы забить гол в ворота соперника. Игра проходит на поле с четко обозначенными воротами на каждой стороне.
              </p>
              <p>
                История футбола:
                Истоки футбола можно проследить до древних цивилизаций, но современный футбол как мы его знаем, появился в Англии в XIX веке. С тех пор футбол стремительно завоевал мир, став самым популярным видом спорта на планете.
              </p>
              <p>
                Чем интересен футбол?
                * Динамика и непредсказуемость: Футбол полон неожиданных поворотов, где любая команда может победить, даже если она считается аутсайдером.
                * Командный дух: Футбол - это командный вид спорта, где успех зависит от взаимодействия всех игроков.
                * Эмоции и страсть: Футбольные матчи вызывают сильные эмоции и страсть у болельщиков, создавая неповторимую атмосферу.
                * Культура: Футбол – это не просто игра, это культура, которая объединяет людей и формирует традиции.
              </p>
            </div>
          } />
          <Route path="/about" element={<h2>О нас</h2>} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:playerId" element={<PlayerDetails />} /> {/* Новый маршрут для деталей игрока */}
          <Route path="/player-creation" element={<PlayerCreation />} />
          <Route path="/edit-player/:playerId" element={<EditPlayer />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />
          <Route path="/team-creation" element={<TeamCreation />} />
          <Route path="/edit-team/:teamId" element={<EditTeam />} />
          <Route path="/teams/:teamId/players" element={<TeamPlayers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;