import './App.css';
import ReactDOM from "react-dom/client";
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from './pages/Shopping';
import MovieList from './pages/MovieList';
import Movies from './pages/Movies';
export default function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/shopping' element={<Shopping />}/>
    <Route path='/Movie' element={<Movies />}/>

  </Routes>
  </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);