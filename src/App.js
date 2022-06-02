import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
