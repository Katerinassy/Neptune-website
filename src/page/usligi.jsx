import React from 'react';
import '../style/usligi.css'; // Подключаем стили
import uslugi1 from '../image/uslugi1.svg';
import uslugi2 from '../image/uslugi2.svg';
import uslugi3 from '../image/usugi3.svg';
import uslugi4 from '../image/Group 1 (1).svg';
import house from '../image/house.svg';

const Usligi = () => {
  return (
    <div className="usligi-container">
      <h1 className="title">Услуги</h1>

      <div className="service">
        <div className="service-image-wrapper">
          <img src={uslugi1} alt="Общение с дельфинами" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Общение и плавание с дельфинами</h2>
          <p>
            Наши гости могут пообщаться с дельфинами в их естественной среде обитания.
            Общение с дельфинами - это незабываемый и завораживающий процесс как для детей, так и для взрослых.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image-wrapper">
          <img src={uslugi2} alt="Дайвинг" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Дайвинг</h2>
          <p>
            Вы можете погрузиться в удивительный подводный мир с дельфинами и белухами.
            Под водой вы проведете 30 минут, сможете услышать морских млекопитающих, погладить и поиграть с ними.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image-wrapper">
          <img src={uslugi3} alt="Видеосъемка под водой" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Видеосъемка под водой</h2>
          <p>
            Снять видео и запечатлеть сказочное мгновение на фотоаппарат можно как во время общения с дельфинами, так и во время дайвинга.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image-wrapper">
          <img src={uslugi4} alt="Картина от дельфина" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Картина от дельфина</h2>
          <p>
            Оказываются дельфины творческие существа. Любой желающий может приобрести картину и помочь дельфину подобрать цвета.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-image-wrapper">
          <img src={house} alt="Отдых на берегу" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Отдых на берегу моря рядом с дельфинами</h2>
          <p>3 спальных места (2 взрослых и 1 ребенок)</p>
          <ul>
            <li>Кондиционер, холодильник</li>
            <li>Туалет, душ, горячая вода</li>
            <li>Постельное белье меняется ежедневно</li>
            <li>Полотенца меняются 2 раза в день уборка по требованию</li>
            <li>20-литровый очищенный питьевой воды</li>
            <li>Доступ 1 час на езду и 1 час на выход под ключ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usligi;
