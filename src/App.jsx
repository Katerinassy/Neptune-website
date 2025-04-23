import './App.css';
import Header from './page/header';
import Onas from './page/onas';
import ParkInfo from './page/parkinfo';
import Footer from './page/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <ParkInfo />
      <Onas/>
     <Footer/>
    </div>
  );
}

export default App;