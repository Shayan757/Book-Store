const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new Schema({


    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

    },   


    title : {

        type: String,
        required : true
    },

    author : {

        type: String,
        required : true
    },

    publishYear : {

        type : Number,
        required : true
    },

    imagePath : {

        type : String,
        required : true
    },

    price : {

        type : Number,
        required : true
    }
  

  
},

{

    timestamps : true
}


);




// book.createIndexes();

module.exports = mongoose.model("books", booksSchema);
