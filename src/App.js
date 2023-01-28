import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import About from './components/diftexts/About';
import Boaventura from './components/diftexts/Boaventura';
import Experiences from './components/diftexts/Experiences';
import News from './components/diftexts/News';
import Villas from './components/diftexts/Villas';
import Vinhas from './components/diftexts/Vinhas';
import Shop from './components/diftexts/Shop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/about-us' element={<About />} ></Route>
          <Route path='/experiences' element={<Experiences />} ></Route>
          <Route path='/villas' element={<Villas />} ></Route>
          <Route path='/vinhas' element={<Vinhas />} ></Route>
          <Route path='/news' element={<News />} ></Route>
          <Route path='/boaventura' element={<Boaventura />} ></Route>
          <Route path='/shop' element={<Shop />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
