import React from 'react';
import '../style/parkinfo.css'; // Linking styles

const ParkInfo = () => {
  return (
    <div className="block_1">
      <h1 className="park-title">ПАРК МОРСКИХ МЛЕКОПИТАЮЩИХ</h1>
      <p className="park-phone">Телефон: +7 (978) 855 46 54</p>
      <p className="park-address">Крым, Сакский район, с. Крыловка, ул. Новоозёрненская, 1</p>
    </div>
  );
};

export default ParkInfo;