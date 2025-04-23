import { Routes, Route } from 'react-router-dom';
import App from './App';
import App3 from './App3';
import App2 from './App2';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/usligi" element={<App2 />} />
      <Route path='/delfin' element={<App3/>}/>
      <Route path='/meropriatiya' element={<App4/>}/>
      <Route path='/galerea' element={<App5/>}/>
      <Route path='/contact' element={<App6/>}/>
    </Routes>
  );
}

export default Routers;