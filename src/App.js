// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Createbook from "./Components/Createbook";
import Showbook from "./Components/Showbook";
import BookState from "./Context/Book/bookState.js";
import Navbar from "./Components/Navbar.js";
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";



function App() {
  return (
<>

<BookState>



<Router>

<Navbar/>

<Routes>

<Route exact path="/" element={<Home/>} />
<Route  path="/createbook" element={<Createbook/>} />
<Route  path="/showbook" element={<Showbook/>} />
<Route  path="/Register" element={<Register/>} />
<Route  path="/login" element={<Login/>} />


</Routes>


</Router>


</BookState>








  </>   
  );
}

export default App;
