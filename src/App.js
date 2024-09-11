
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Ecommerce from './ApiComponent/Ecommerce';
// import DisplayProduct from './ApiComponent/DisplayProduct';
import Display from './ApiComponent/Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Ecommerce/>}/>
         <Route path="/product" element={<Ecommerce/>} />
        <Route path="/product/:id" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
