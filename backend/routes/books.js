const express = require('express');
const booksModel = require("../models/booksModel")
const { body, validationResult } = require('express-validator');

const router = express.Router();

  

//Creat books//

router.post('/book' , [

    body("title" , "enter valid title").isLength({min : 5}),

    body("author" , "enter valid author").isLength({ min: 4 })
    
] , async(req, res) => {


    const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(500).json({ errors: error.array() });
  }


    try {

        const {title,author,publishYear,imagePath,price} = req.body;


        if(!title || !author || !publishYear || !imagePath || !price)

        {

            return res.status(400).json("send all required fields : title,author,publishYear,imagePath,price");
        }


        const newBook = {


           title , author , publishYear , imagePath, price
        }

        const Book = await booksModel.create(newBook)

        res.json(Book)

        
    } catch (error) {

        console.error(error.message);

        return res.status(500).send("Internal server error");
        
    }
    
  })

 // fetch all books//


 router.get('/fetchallbook' , async(req, res) => {



    try {

        const fetchbooks = await booksModel.find({user:req.user})
        
        res.json (fetchbooks);
        
    } catch (error) {

        console.error(error.message);

        return res.status(500).send("Internal server error");
        
    }
    
  });


// update book //
router.put('/updatebook/:id', [

  body("title", "Enter a valid title").isLength({ min: 5 }),
  body("author", "Enter a valid author").isLength({ min: 4 })

], async (req, res) => {

  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
  }

  try {

      const { title, author, publishYear, imagePath, price } = req.body;

      if ( !title || !author || !publishYear || !imagePath || !price) {
          return res.status(400).json("Send all required fields: title, author, publishYear, imagePath, price");
      }

      const bookId = req.params.id;

      const updatedBook = {}

      let existingBook = await booksModel.findById(bookId);

      if (!existingBook) {
          return res.status(404).json("Book not found");
      }


    if  (title)  {updatedBook.title = title}
    if  (author)  {updatedBook.author = author}
    if  (publishYear)  {updatedBook.publishYear = publishYear}
    if  (imagePath)  {updatedBook.imagePath = imagePath}
    if  (price)  {updatedBook.price = price}

      existingBook = await booksModel.findByIdAndUpdate(bookId,{$set: updatedBook , new:true})

      res.json({existingBook});

  } catch (error) {

      console.error(error.message);
      return res.status(500).send("Internal server error");

  }

});


  



  module.exports = router;
  