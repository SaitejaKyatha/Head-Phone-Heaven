import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
