import React, {useState} from 'react';

const CartItem = ({ cartItem,removeFromCart }) => {

  const [quantity, setQuantity] = useState(1);


  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


    




  return (
    <div className="cart_box" key = {cartItem.id}>
      <div className="cart_img">
        <img src={cartItem.imagePath} alt="" />
        <h6>{cartItem.title}</h6>
        <h6> by: {cartItem.author}</h6>
        <h6> publishYear: {cartItem.publishYear}</h6>
        <h6> Rs: {cartItem.price * quantity}</h6>
        <div>
        <button className="increaseQuantity" onClick={increaseQuantity}>+</button>
          <span>{quantity}</span>
        <button className="decreaseQuantity" onClick={decreaseQuantity}>-</button>
        </div>
         <button className="remove" onClick={()=>removeFromCart(cartItem.id)}>
          
         <i className="fa-solid fa-trash"></i>
          
          </button>  
      </div>
    </div>
  );
};

export default CartItem;
