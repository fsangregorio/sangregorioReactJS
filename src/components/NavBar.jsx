import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <div>
      <Link to="/">Inicio</Link> <br />
      <Link to="/category/picadas">Picadas</Link> <br />
      <Link to="/category/cervezas">Cervezas</Link> <br /> 
      <Link to="/cart">Cart</Link> <br />
      <Link to="/checkout">Checkout</Link> <br /> 
      <CartWidget/>
    </div>
  )
}
