import './App.css';
import { 
  Route,
  BrowserRouter,
  Routes,} from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} /> 
     </Routes>
    </BrowserRouter>
  
  );
}

export default App;
