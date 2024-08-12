// Footer.js
import React from 'react';
import './styles/Footer.css'; // Подключите стили, если необходимо

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Мое Приложение. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
