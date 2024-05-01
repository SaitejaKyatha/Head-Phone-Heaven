import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import AllProducts from './AllProducts_components/AllProducts';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/all-products' element={<AllProducts/>}/>
      </Routes>
    </>
  );
}

export default App;
