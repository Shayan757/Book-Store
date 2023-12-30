import React from 'react'
import CartItem from './CartItem';

const CartItems = ({cart, removeFromCart}) => {











  return (
    <>
    



    {cart.map((cartItem, index) => (

<CartItem key={index} cartItem={cartItem} removeFromCart = {removeFromCart}  />

))}

    
</>
    
  )
}

export default CartItems;
