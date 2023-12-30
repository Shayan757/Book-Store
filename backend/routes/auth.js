const express = require('express');
const userModel = require("../models/userModel")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
require('dotenv').config()




// Create User//

router.post("/Register", [

    body("name", "Enter a valid name").isLength({min:6}),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({min:6})
], async (req, res) => {

  let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    
    try {


let user = await userModel.findOne({email:req.body.email})

if (user)

return res.status(300).json({ error: "This email is already exist"})

const salt = await bcrypt.genSaltSync(10);
const Secpass = await bcrypt.hash(req.body.password, salt)


user = await userModel.create({

  name : req.body.name,
  email : req.body.email,
  password: Secpass
})

const data = {
  user : {
    id:user.id
  }
}


const authtoken = jwt.sign(data,process.env.JWT_SECRET)

success = true;

res.json({success,authtoken})


    
  } catch (error) {
    
    console.error(error.message);

    return res.status(500).send("Internal server error");
  }


  });


  //login//


  router.post("/login", [

    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({min:6})
], async (req, res) => {

  let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const {email,password} = req.body;

   try {

 let user = await userModel.findOne({email})

 if (!user)
    
 return res.status(300).json({ error: "Enter with correct credentials"})

 
 const passwordcompare = await bcrypt.compare(password,user.password)

 if(!passwordcompare)

 return res.status(300).json({ error: "Enter with correct credentials"})


 const data = {
  user : {
    id:user.id
  }
}


const authtoken = jwt.sign(data,process.env.JWT_SECRET)
success = true;
res.json({success,authtoken})


   } catch (error) {
    
    console.error(error.message);

    return res.status(500).send("Internal server error");
   }


  });

  //get user//


  router.post("/getuser",fetchuser,async (req, res) => {


try {

  userId = req.user.id

  const user = await userModel.findById(userId).select("-password")

  res.send(user)
  
} catch (error) {
  

  console.error(error.message);

    return res.status(500).send("Internal server error");
}



  })

  module.exports = router