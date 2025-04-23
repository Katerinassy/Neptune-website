import React from 'react';
import '../style/DolphinTherapy.css';
import delfin1 from '../image/delfin1.svg'
import delfin2 from '../image/delfin2.svg'

const DolphinTherapyPage = () => {
  return (
    <div className="dolphin-page">
      {/* Шапка страницы */}
      <header className="dolphin-header" >
        <div className="header-overlay">
          <h1>ДЕЛЬФИНОТЕРАПИЯ</h1>
        </div>
      </header>

      <main className="dolphin-content">
        {/* Секция метода */}
        <section className="therapy-section">
          <h2>МЕТОД ДЕЛЬФИНОТЕРАПИИ</h2>
          <div className="section-container">
            <div className="text-block">
              <p>Метод дельфинотерапии в брину — это реабилитационный комплекс, направленный на специальное обеспечение и финансовую реабилитацию частично для освобождения развития для интеграции в современной скидке.</p>
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
                <h3>ТЕХНИКИ РЕАБИЛИТИЗАЦИИ:</h3>
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
      </main>
    </div>
  );
};

export default DolphinTherapyPage;