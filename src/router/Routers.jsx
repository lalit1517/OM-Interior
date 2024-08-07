import React from 'react';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom'; 
import Home from '../pages/Home.jsx';
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';
import Gallery from '../pages/gallery.jsx';
import Office from '../pages/office.jsx';
import Restaurant from '../pages/restaurant.jsx';
import InteriorDesign from '../pages/interior-design.jsx';
import TurnkeySoln from '../pages/turnkey-soln.jsx';
import ConstructionMng from '../pages/construction-mng.jsx';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery-offices' element={<Office/>}/>
      <Route path='/gallery-restaurants' element={<Restaurant/>}/>
      <Route path='/interior-design' element={<InteriorDesign/>}/>
      <Route path='/turnkey-solutions' element={<TurnkeySoln/>}/>
      <Route path='/construction-management' element={<ConstructionMng/>}/>
    </Routes>
  );
};

export default Routers;
