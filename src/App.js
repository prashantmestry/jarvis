import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

import {  Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App"> 
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
