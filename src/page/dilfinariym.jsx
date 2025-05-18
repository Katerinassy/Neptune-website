import React from 'react';
import '../style/DolphinTherapy.css';
import delfin1 from '../image/delfin1.svg';
import delfin2 from '../image/delfin2.svg';
import delphin from '../image/delphin1.svg';
import delphin2 from '../image/delphin2.svg';
import girl from '../image/girl.svg';

const DolphinTherapyPage = () => {
  return (
    <div className="dolphin-page">
      {/* Шапка страницы */}
      <header className="dolphin_header">
        <div className="header-overlay">
          <div className="title-container">
            <img src={delphin} alt="Дельфин" className="dolphin-image left" />
            <h1>ДЕЛЬФИНОТЕРАПИЯ</h1>
            <img src={delphin2} alt="Дельфин" className="dolphin-image right" />
          </div>
        </div>
      </header>

      <main className="dolphin-content">
        {/* Секция метода */}
        <section className="therapy-section">
          <h2>МЕТОД ДЕЛЬФИНОТЕРАПИИ</h2>
          <div className="section-container">
            <div className="text-block">
              <p>Метод дельфинотерапии в Крыму — это 
реабилитационный комплекс, направленный на социально-психологическую и 
физическую реабилитацию, абилитацию 
и адаптацию детей с особенностями 
развития для интеграции в современный 
социум.</p>
              <p>Научно-практический центр дельфинотерапии определяет проверки по показателю коррективных данных дельфинотерапии в сопровождении квалифицированного специалиста, проводит научные исследования, разрабатывает практические, методические рекомендации и программы реабилитации для детей и взрослых с ограниченными возможностями здоровья.</p>
            </div>
            <div className="image-block">
              <img src={delfin1} alt="Метод дельфинотерапии" />
            </div>
          </div>
        </section>

        {/* Кнопка записи */}
        <div className="signup-divider">
          <button className="signup-button">ЗАПИСАТЬСЯ</button>
        </div>

        {/* Секция "Как работает" */}
        <section className="how-it-works">
          <h2>КАК РАБОТАЕТ ДЕЛЬФИНОТЕРАПИЯ</h2>
          <div className="section-container">
            <div className="features-block">
              <div className="feature">
                <h3>ИНТЕРАКТИВНЫЕ ИГРЫ:</h3>
                <p>игры с дельфинами способствуют развитию моторики, коммуникативных навыков и контингенции способностей.</p>
              </div>
              <div className="feature">
                <h3>ТЕХНИКА РЕАБИЛИТАЦИИ:</h3>
                <p>звуковые волны, издаваемые дельфинами при эхолокации, оказывают успокаивающее воздействие на разум и тело человека, способствуя глубокой релаксации.</p>
              </div>
            </div>
            <div className="image-block">
              <img src={delfin2} alt="Взаимодействие с дельфинами" />
            </div>
          </div>
        </section>

        {/* Кнопка записи */}
        <div className="signup-divider">
          <button className="signup-button">ЗАПИСАТЬСЯ</button>
        </div>

        {/* Блок преимуществ */}
        <section className="advantages-section">
          <div className="advantages-container">
            <div className="advantages-image">
              <img src={girl} alt="Дельфинотерапия" />
            </div>
            
            <div className="advantages-content">
              <h2>ПРЕИМУЩЕСТВА ДЕЛЬФИНОТЕРАПИИ</h2>
              
              <p>Участники отмечают снижение стресса, улучшение социальных навыков и общего состояния.</p>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="percent">90%</span>
                  <p>Улучшение концентрации</p>
                </div>
                <div className="stat-card">
                  <span className="percent">75%</span>
                  <p>Улучшение эмоционального состояния</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DolphinTherapyPage;