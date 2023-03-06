import React from 'react'
import "./cartWidget.css"

const CartWidget = (props) => {
  return (
    <div className='nav-der'>
            <img  className="carritoDeCompras" src="https://cdn-icons-png.flaticon.com/128/1170/1170627.png" alt="carrito" />{props.number}
    </div>
  )
}

export default CartWidget