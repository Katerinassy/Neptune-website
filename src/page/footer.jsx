import React from 'react';
import '../style/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Контакты</h3>
                    <p className="footer-text">Телефон: +7 (123) 456-78-90</p>
                    <p className="footer-text">Email: info@dolphinpark.ru</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Адрес</h3>
                    <p className="footer-text">г. Москва, ул. Морская, д. 10</p>
                </div>
               
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2025 Dolphin Park. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;