import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Health from './Component/Health';
import Science from './Component/Science';
import Sports from './Component/Sports';


function App() {
  const Business = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e1033e81fa541d3a41583e5ef18425e&q=india";
  const Entertainment = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7e1033e81fa541d3a41583e5ef18425e&q=india";
  // const technology = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7e1033e81fa541d3a41583e5ef18425e&q=india";
  const request = new Request(Business);
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
              <Route path="/" element={<Home baseURL={request}/>}/>
              <Route path="/business" element={<Home baseURL={Business}/>}/>
              <Route path="/entertainment" element={<About baseURL={Entertainment} />}/>
              <Route path="/health" element={<Health />}/>
              <Route path="/science" element={<Science />}/>
              <Route path="/sports" element={<Sports />}/>
      </Routes>
    </div>
  );
}

export default App;


