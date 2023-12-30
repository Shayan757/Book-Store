
import {useState} from 'react'
import bookContext from "./bookContext";

const BookState = (props)=>{

 const [book, setbook] = useState([]);
   



// create book//

const Book = async(title,author,publishYear,imagePath,price)=>{
    
//api call//

const response = await fetch("http://localhost:3000/api/books/book", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title,author,publishYear,imagePath,price}),
      });

      const bookjson = await response.json();

      setbook(book.concat(bookjson))
      


};

// fetch books//

    
const getBook = async()=>{

//api call//

    const response = await fetch("http://localhost:3000/api/books/fetchallbook", {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      setbook(json)

      console.log(json);
      


};



// update book //

const updateBook = async(id,title,author,publishYear,imagePath,price)=>{

//api call//

    const response = await fetch("http://localhost:3000/api/books/updatebook", {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id,title,author,publishYear,imagePath,price}),
      });

      const json = await response.json();

      console.log(json);

      const updatedbook = book.filter((book) => book.id !== id);

      setbook(updatedbook)

      


};


// delete book//

const deleteBook = async(id)=>{

    
    const response = await fetch("http://localhost:3000/api/books/deletebook", {
        method: "delete", 
        headers: {
          "Content-Type": "application/json",
        },
  
      });

      const json = await response.json();

      console.log(json)

      const deletedbook = book.filter((book) => book.id !== id);

      setbook(deletedbook)

};














return(

<bookContext.Provider value={{ book, Book, getBook, updateBook, deleteBook}}>

{props.children}

</bookContext.Provider>

)




}

export default BookState;














