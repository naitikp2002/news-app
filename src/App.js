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
  const Business = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=64c84a3969e1463a9faa859ad5fd021c&q=india";
  const Entertainment = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=64c84a3969e1463a9faa859ad5fd021c&q=india";

  const science = "https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=64c84a3969e1463a9faa859ad5fd021c";
  const sports = "https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=64c84a3969e1463a9faa859ad5fd021c";
  const technology = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=64c84a3969e1463a9faa859ad5fd021c&q=india";

  return (
    <div className="App">
      <NavBar/> 
      <Routes>
              <Route path="/business" element={<Home baseURL={Business}/>}/>
              <Route path="/entertainment" element={<About baseURL={Entertainment} />}/>
              <Route path="/health" element={<Health />}/>
              <Route path="/science" element={<Science />}/>
              <Route path="/sports" element={<Sports />}/>
              {/* <Route path="/health" element={<Home baseURL={Business}/>}/>
              <Route path="/entertainment" element={<About baseURL={Entertainment} />}/>
              <Route path="/business" element={<Home baseURL={Business}/>}/>
              <Route path="/entertainment" element={<About baseURL={Entertainment} />}/>
              <Route path="/contact" element={<Health baseURL={Health}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response);
  //     setData(response.data);
  //   });
  // }, []);
