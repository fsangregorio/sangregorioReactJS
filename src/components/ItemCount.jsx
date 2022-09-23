import React, {useState, useContext, useEffect} from 'react';
import { cartContext } from '../components/CartContext/CartContextComponent';
import { Link } from 'react-router-dom';

export default function ItemCount({product}) {


    const [count, setCount] = useState(1);
    const {cart, addToCart} = useContext(cartContext);
    const [removeButton, setRemoveButton] = useState (false);


    function sum(){
        if(count < product.stock ){
        setCount(count + 1)};
    }

    function res(){
        if(count >= 2 ){
        setCount(count - 1)};        
    }

    function onAdd(){
      addToCart(product, count);
      setRemoveButton(true);
    }


    useEffect(()=> {
      console.log(cart);      
    }, [cart])


  return (
    <div>
        <span onClick={sum} style= {{cursor: "pointer"}}>+</span>
        {count}
        <span onClick={res}style= {{cursor: "pointer"}}>-</span>
        <br />
        
        {removeButton ?
          (<>"Producto agregado correctamente." <Link to="/">Seguir Comprando</Link>
          <br />
          <Link to="/checkout">Finalizar Compra</Link></>)
          :
          (<button onClick={onAdd}>Agregar al carrito</button>)}    
    </div>
  )
}
