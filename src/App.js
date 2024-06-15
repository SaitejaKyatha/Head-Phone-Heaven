import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import AllProducts from './AllProducts_components/AllProducts';
import Specifications from './Specifications_Components/Specifications';
// import commonContext from './Hooks_Component/CommonContext';



function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/all-products' element={<AllProducts/>}/>
        <Route path='/product-details/:productId' element={<Specifications/>}/>
        
      </Routes>
    </>
  );
}

export default App;
