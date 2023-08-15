import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

import {  Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="p-4">
        <Navigation />
        <div className='border-2 my-4 p-4 border-slate-200'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
