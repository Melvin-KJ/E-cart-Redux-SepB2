import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import View from './pages/View';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Pnf from './pages/Pnf';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id/view" element={<View/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  );
}

export default App;
