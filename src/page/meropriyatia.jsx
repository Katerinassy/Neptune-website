import React from 'react';
import '../style/DolphinEvents.css';
import belyxa from '../image/belyxa1.svg';
import cat from '../image/cat2.svg';
import pilican from '../image/pilican.svg';
import cat2 from '../image/cat1.svg';
import enot from '../image/enot.svg';
import lebed from '../image/lebeld.svg';

const DolphinEvents = () => {
  return (
    <div className="events-page">
      {/* Основной заголовок */}
      <h1 className="main-title">МЕРОПРИЯТИЯ</h1>

      {/* Секция открытых тренировок с фото */}
      <div className="event-section with-image">
        <div className="text-content">
          <h2 className="section-title">ОТКРЫТЫЕ ТРЕНИРОВКИ</h2>
          <h3 className="section-subtitle">БЕЛУХ И ДЕЛЬФИНОВ</h3>
          
          <p className="section-text">
            Все желающие могут приехать в дельфинарий «Нептун», насладиться компанией дельфинов и узнать много нового и интересного о жизни морских млекопитающих!
          </p>
          <p className="highlight-text">
            Идеальный подарок — это подарочный сертификат на общение с дельфином!
          </p>
        </div>
        
        <div className="image-content">
          <img src={belyxa} alt="Белухи и дельфины" className="event-image" />
        </div>
      </div>

      {/* Разделитель */}
      <div className="divider-line"></div>

      {/* Секция мини-шоу с фото */}
      <div className="event-section with-image reversed">
        <div className="image-content">
          <img src={cat} alt="Шоу с морскими котиками" className="event-image" />
        </div>
        
        <div className="text-content">
          <h2 className="section-title centered">МИНИ-ШОУ С</h2>
          <h3 className="section-subtitle centered">МОРСКИМИ КОТИКАМИ</h3>
          
          <p className="section-text">
            Вы можете порадоваться с веселыми и находчивыми морскими котиками. Шоу программа с морскими котиками, фотографии на память будут радовать Вас, когда море и солнце будут в воспоминаниях.
          </p>
        </div>
      </div>

      {/* Разделитель */}
      <div className="divider-line"></div>

      {/* Секция местных обитателей */}
      <div className="event-section">
        <h2 className="section-title bold">МЕСТНЫЕ ОБИТАТЕЛИ</h2>
        <div className="inhabitants-grid">
          <div className="inhabitant-item">
            <button>
              <img src={pilican} alt="Местный обитатель" />
            </button>
          </div>
          <div className="inhabitant-item">
            <button>
              <img src={enot} alt="Местный обитатель" />
            </button>
          </div>
          <div className="inhabitant-item">
            <button>
              <img src={cat2} alt="Местный обитатель" />
            </button>
          </div>
          <div className="inhabitant-item">
            <button>
              <img src={lebed} alt="Местный обитатель" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DolphinEvents;