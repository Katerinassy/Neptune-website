import React from 'react';
import '../style/contact.css';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <section className="contacts-hero">
        <div className="hero-overlay">
          <h1>Наши контакты</h1>
          <p>Мы всегда рады вашим вопросам и предложениям</p>
        </div>
      </section>

      <div className="contacts-container">
        <section className="contact-info">
          <div className="contact-card">
            <h2><i className="icon-map"></i> Адрес</h2>
            <p>г. Москва, ул. Морская, 15</p>
            <p>Дельфинарий "Нептун"</p>
          </div>

          <div className="contact-card">
            <h2><i className="icon-clock"></i> Часы работы</h2>
            <p>Ежедневно с 10:00 до 20:00</p>
            <p>Касса работает до 19:30</p>
          </div>

          <div className="contact-card">
            <h2><i className="icon-phone"></i> Телефоны</h2>
            <p>+7 (123) 456-78-90</p>
            <p>+7 (987) 654-32-10 (группы)</p>
          </div>

          <div className="contact-card">
            <h2><i className="icon-email"></i> Электронная почта</h2>
            <p>info@dolphinarium.ru</p>
            <p>booking@dolphinarium.ru (для бронирования)</p>
          </div>
        </section>

        <section className="map-section">
          <div className="map-container">
            <iframe 
              title="Карта расположения дельфинария"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
            ></iframe>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Обратная связь</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Ваше имя" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Ваш email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Ваш телефон" />
            </div>
            <div className="form-group">
              <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Отправить сообщение</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactsPage;