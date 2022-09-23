import React, {useState, useContext} from 'react';
import {cartContext} from './CartContext/CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Checkout() {

  const {totalToPay, cart, deleteAll} = useContext(cartContext);
  const [name,setName] = useState("");
  const [tel,setTel] = useState("");
  const [email,setEmail] = useState("");
  const [orderId,setOrderId] = useState("");

  function validateForm(){
    const order = {
      buyer: {name, tel, email},
      totalToPay,
      cart,
    }
  

  const db = getFirestore();
  const orders = collection(db, "orders");
  addDoc(orders, order).then(({id}) => {
    setOrderId(id);
    deleteAll();
  });
  }


  return (
    <>
    {orderId ? "Gracias por tu compra. Tu numero de compra es : " + orderId : ""}
    <div>
      <h1>Ingrese sus datos</h1>
      <br />
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} /> <br />
      <input type="tel" placeholder='tel'onChange={(e) => setTel(e.target.value)} /> <br />
      <input type="email" placeholder='email'onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
      <button onClick={validateForm}>Confirmar Compra</button> <br />

    </div>
    </>
  )
}
