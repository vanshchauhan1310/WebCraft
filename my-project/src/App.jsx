import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/notfound';
import './App.css';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="./#about-section" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;