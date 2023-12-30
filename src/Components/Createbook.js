import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import bookContext from '../Context/Book/bookContext';
import Bookitem from './bookitem';
import CartItems from './cartitems';

const Createbook = () => {


  const context = useContext(bookContext);

  const { getBook, book } = context;


  const [books, setBooks] = useState([]);

  let navigate = useNavigate();


  useEffect(() => {


    if (localStorage.getItem("token")) {

      getBook();
      
    } else {
      
      navigate("/login")
    }

    

  }, []);







  // useEffect(() => {
  //   // Only update the state if it's empty
  //   if (books && books.length > 0) {
  //     setBooks(books);
  //   }
  // }, []);


const [cart, setCart] = useState([]);

const addToCart = (books) => {
  
  // Check if the item is already in the cart
  if (cart.indexOf(books) !== -1) return;

  console.log("exist", books);

  // Use the spread operator to add the new item to the cart
  setCart([...cart, books]);

  console.log("update", books);


};

const removeFromCart = (booksId) => {
  const indexToRemove = cart.findIndex((item) => item.id === booksId);

  if (indexToRemove !== -1) {
    const updatedCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
    setCart(updatedCart);
  }
};


  

  

  return (
    <>

      <div className='row my-3'>




        <h2 className='heading'> Your Books </h2>


<button className="btn btn-primary position-relative" style={{ maxWidth: '120px', right: -1000, marginTop: -49 , height:35, backgroundColor: "rgb(123, 103, 103)", }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">





<i className="fa-solid fa-cart-shopping"></i> <span className="badge text-bg-secondary">{cart.length}</span>

</button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel" >My Cart</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">


<CartItems cart = {cart}  removeFromCart = {removeFromCart}  />

<h3 className="cart-text">


  {cart.length===0 ? "Empty cart" : ""}



</h3>



  </div>
</div>


        {book.map((books) => {

          return <Bookitem key={books._id} books={books} addToCart={addToCart} />

        })}


      </div>



    </>


  
  )
   
}


export default Createbook;
