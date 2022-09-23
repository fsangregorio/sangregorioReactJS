import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import {createContext} from "react";
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextComponent from './components/CartContext/CartContextComponent';

export const cartContext = createContext();


function App() {  

  return (
    <>
    <CartContextComponent>    
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>    
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        <Footer />
      </BrowserRouter>      
    </CartContextComponent>
    </>
  );
}

export default App;
