import React, { useState } from 'react';
import '../style/DolphinEvents.css';
import belyxa from '../image/belyxa1.svg';
import cat from '../image/cat2.svg';
import pilican from '../image/pilican.svg';
import cat2 from '../image/cat1.svg';
import enot from '../image/enot.svg';
import lebed from '../image/lebeld.svg';
import morscat from '../image/morscat.svg';
import draiw from '../image/draiw.svg';
import medyza from '../image/medyza.svg';
import vodrosli from '../image/vodrosli.svg';

const DolphinEvents = () => {
  const [activeInhabitant, setActiveInhabitant] = useState(null);

  const inhabitants = [
    { id: 1, name: "ПЕЛИКАН", image: pilican, description: "Наш пеликан - удивительная птица с большим клювом. Он любит общаться с посетителями и демонстрировать свои навыки рыболовства." },
    { id: 2, name: "ЕНОТ", image: enot, description: "Енот-полоскун - самый любопытный обитатель нашего парка. Он обожает играть с различными предметами и угощения." },
    { id: 3, name: "МОРСКОЙ КОТ", image: cat2, description: "Морской кот - грациозное создание, которое прекрасно чувствует себя как в воде, так и на суше. Его выступления всегда вызывают восторг у зрителей." },
    { id: 4, name: "ЛЕБЕДЬ", image: lebed, description: "Белый лебедь - символ грации и красоты. Наши лебеди привыкли к посетителям и часто подплывают близко к берегу." },
    { id: 5, name: "МОРСКОЙ ЛЕВ", image: morscat, description: "Морской лев - самый крупный и харизматичный обитатель нашего парка. Его трюки и взаимодействие с тренером никого не оставляют равнодушным." }
  ];

  const toggleInhabitant = (id) => {
    setActiveInhabitant(activeInhabitant === id ? null : id);
  };

  return (
    <div className="events-page">
      {/* Океанский заголовок с декорациями */}
      <div className="ocean-header">
        <img src={medyza} alt="Медуза" className="jellyfish jellyfish-1" />
        <img src={vodrosli} alt="Водоросли" className="seaweed seaweed-1" />
        
        <h1 className="main-title ocean-title">МЕРОПРИЯТИЯ</h1>
        
        <img src={medyza} alt="Медуза" className="jellyfish jellyfish-2" />
        <img src={vodrosli} alt="Водоросли" className="seaweed seaweed-2" />
      </div>

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

      {/* Волнистый разделитель */}
      <div className="divider-wave"></div>

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

      {/* Секция экскурсии */}
      <div className="event-section with-image">
        <div className="text-content">
          <h2 className="section-title">ЭКСКУРСИЯ</h2>
          <h3 className="section-subtitle">ПО ДЕЛЬФИНАРИЮ</h3>
          
          <p className="section-text">
            Все желающие могут приехать в дельфинарий «Нептун», насладиться компанией дельфинов и узнать много нового и интересного о жизни морских млекопитающих!
          </p>
          <p className="highlight-text">
            Идеальный подарок — это подарочный сертификат на общение с дельфином!
          </p>
        </div>
        
        <div className="image-content">
          <img src={draiw} alt="Экскурсия по дельфинарию" className="event-image" />
        </div>
      </div>

      {/* Волнистый разделитель (реверсивный) */}
      <div className="divider-wave reverse"></div>

      {/* Секция местных обитателей */}
      <div className="event-section">
        <h2 className="section-title bold centered">МЕСТНЫЕ ОБИТАТЕЛИ</h2>
        <div className="inhabitants-grid">
          {inhabitants.map((inhabitant) => (
            <div className="inhabitant-item" key={inhabitant.id}>
              <button onClick={() => toggleInhabitant(inhabitant.id)}>
                <img src={inhabitant.image} alt={inhabitant.name} />
                <p>{inhabitant.name}</p>
              </button>
              {activeInhabitant === inhabitant.id && (
                <div className="inhabitant-description">
                  <p>{inhabitant.description}</p>
                  <button 
                    className="close-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleInhabitant(inhabitant.id);
                    }}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DolphinEvents;