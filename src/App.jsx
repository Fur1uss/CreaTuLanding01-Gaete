import './App.css'

//components
import NavBar from './components/navBar/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

import HomePage from './components/homePage/HomePage';
import { CartProvider } from "./context/CartContext";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
 
  return (
    <BrowserRouter>
      <CartProvider>
        <>
          <NavBar />
          <Routes>
            <Route path='/' element = {<HomePage />}/>
            <Route path='/category/:category' element = {<ItemListContainer />} />
            <Route path='/detail/:productId' element = {<ItemDetailContainer />} />
            <Route path='/cart' element = {<Cart />} />
            <Route path='/checkout' element = {<Checkout />} />
            <Route path='*' element = {<div>ERROR 404</div>} />
          </Routes>
        </>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
