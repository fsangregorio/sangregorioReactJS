import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({product}) {
  return (
    <div>
        <h1>Name:{product.name}</h1>
        <p>ID: {product.id}</p>
        <img style={{height: "300px"}} src={product.img} alt={product.name} />        
        <p>Price:{product.price}</p>
        <p>Stock:{product.stock}</p>        
        <br/>
        <ItemCount product={product} />
        <br/>
    </div>
  )
}
