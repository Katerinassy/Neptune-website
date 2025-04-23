import React from 'react';
import '../style/onas.css'; 
import img from '../image/img.svg';
import img2 from '../image/img2.svg';
import img3 from '../image/img3.svg';

const About = () => {
  return (
    <div className='block '>
    <div className="about-container">
      <h1 className="title">О НАС</h1>
      <div className="content">
        <div className="section">
          <div className="section-content">
            <h2 className="section-title">ПЛАВАНИЕ С ДЕЛЬФИНАМИ</h2>
            <p className="section-text">
              Дельфинарий «Нептун» – это то место, где морские млекопитающие чувствуют себя комфортно, как дома. Наш
              лечебно-диагностический центр предоставляет каждому гостю возможность окунуться в атмосферу живой природы и
              насладиться общением и плаванием с дельфинами и белухами. Развитие экологической культуры среди населения,
              особенно у подрастающего поколения, является одной из главных задач дельфинария.
            </p>
          </div>
          <img src={img} alt="Плавание с дельфинами" className="section-image" />
        </div>
        <div className="section">
          <div className="section-content">
            <h2 className="section-title">СЕАНСЫ ДЕЛЬФИНОТЕРАПИИ ДЛЯ ДЕТЕЙ С ОГРАНИЧЕННЫМИ ВОЗМОЖНОСТЯМИ</h2>
            <p className="section-text">
              Научно-практический центр дельфинотерапии осуществляет проведение психолого-коррекционных занятий
              дельфинотерапии в сопровождении квалифицированных специалистов. Центр проводит научные исследования,
              разрабатывает практические методические рекомендации и программы реабилитации для детей с ограниченными
              возможностями здоровья.
            </p>
          </div>
          <img src={img2} alt="Сеансы дельфинотерапии" className="section-image" />
        </div>
        <div className="section">
          <div className="section-content">
            <h2 className="section-title">ОТДЫХ НА БАЗЕ «НЕПТУН»</h2>
            <p className="section-text">
              Мы приглашаем Вас на берег залива Донузлав, полюбоваться изумительной природой и просто насладиться
              комфортным времяпрепровождением. Для каждого гостя найдется свое развлечение. Для детей – мини-зоопарк,
              детская площадка, бассейн и аниматоры.
            </p>
          </div>
          <img src={img3} alt="Отдых на базе" className="section-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;