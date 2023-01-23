import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Separate from './components/Separate';
import About from './components/Texts/About';
import Villas from './components/Texts/Villas';
import Vinhas from './components/Texts/Vinhas';
import Boaventura from './components/Texts/Boaventura';
import Experiences from './components/Texts/Experiences';
import News from './components/Texts/News';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Separate></Separate>
      <About></About>
      <Vinhas></Vinhas>
      <Villas></Villas>
      <Experiences></Experiences>
      <Boaventura></Boaventura>
      <News></News>
    </>
  );
}

export default App;
