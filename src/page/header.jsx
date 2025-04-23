import { useNavigate } from "react-router-dom";
import React from 'react';
import '../style/header.css'
import logo from '../image/logo.svg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo">
            <img src={logo} alt="Logo" className="park-logo" />
            </div>
            {/* Навигация */}
            <nav className="navbar">
                <a onClick={() => navigate("/")} className="navbar__link">О компании</a>
                <a onClick={() => navigate("/")} className="navbar__link">Главная</a>
                <a onClick={() => navigate("/delfin")} className="navbar__link">Дельфинотерапия</a> 
                <a onClick={() => navigate("/meropriatiya")} className="navbar__link">Мероприятия</a>
                <a  onClick={() => navigate("/usligi")} className="navbar__link">Услуги</a>
                <a onClick={() => navigate("/galerea")} className="navbar__link">Галерея</a>
                <a onClick={() => navigate("/contact")} className="navbar__link">Контакты</a>
            </nav>
        </header>
    );
}

export default Header;