import React, { useEffect } from 'react'
import {createContext, useState} from "react";

export const cartContext = createContext();



export default function CartContextComponent({children}) {
    const [cart,setCart] = useState([]);
    const [totalCount,setTotalCount] = useState(0)
    const [totalToPay,setTotalToPay] = useState(0)

    function addToCart (item, count){

      const cartAux = [...cart];

      let foundInCart = false;

      for (let i = 0; i < cartAux.length; i++) {
        if (cartAux[i].id === item.id){
          cartAux[i].count = cartAux[i].count + count;
          foundInCart = true; 

        }        
      }

      if (!foundInCart){
        cartAux.push({...item, count});
      }

      setCart (cartAux)
    }

    function deleteFromCart (id){
      setCart (cart.filter((item)=> item.id !== id));

    }

    function deleteAll (){
      setCart([]);

    }

    useEffect(()=> {
      setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
      setTotalToPay(cart.reduce((acc, item) => acc + (item.count * item.price), 0));
    }, [cart])

    useEffect(()=> {
      ;
    }, [totalToPay])

  return (
    <cartContext.Provider value={{cart, addToCart, totalCount, totalToPay, deleteFromCart, deleteAll}}>
        {children}
    </cartContext.Provider>
  )
}
