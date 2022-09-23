import React from 'react'
import {Link} from "react-router-dom"

export default function Item({product}) {
  return (
    <>
    <Link to={"/item/" + product.id}>
    <div>
        <p>ID: {product.id}</p>
        <p>Name:{product.name}</p>
        <p>Price:{product.price}</p>
        <p>Stock:{product.stock}</p>
        <img style={{height: "180px"}} src={product.img} alt={product.name} />
        <br/>
        <br/>
    </div>
    </Link>
    </>
  )
}
