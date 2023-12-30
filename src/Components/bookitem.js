import React from 'react'

 

const Bookitem = (props) => {

  const { books , addToCart } = props;

 


  return (

    <>
      
      

      <div className='col-md-3'>
             
        <br />
        
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={books.imagePath} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{books.title}</h5>

                <h3 className="card-author"> by : {books.author}</h3>

                <h4 className="card-publishYear"> publishYear : {books.publishYear}</h4>

                <h5 className="card-price"> Rs : {books.price}</h5>
                

                <button className='button' onClick={()=> addToCart(books)}>

               Add To Cart

              </button>   




              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Bookitem
