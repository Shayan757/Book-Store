import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  

  let navigate = useNavigate(); 

  const handleLogout= () =>{

    localStorage.removeItem("token")

    navigate("/")
  }

  return (
    <div>


    <nav className="navbar navbar-expand-lg navbar-brown">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Book Store</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/Showbook">Showbook</NavLink>
        </li>
    </ul>

    {localStorage.getItem("token") ? ( 
    
    
    <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button> 


     ) :     <ul className="nav justify-content-end">

  <li className="nav-item">
    <NavLink className="nav-link " aria-current="page" to="/Register" >Register</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link  " aria-current="page" to="/Login" >Login</NavLink>
  </li>
</ul>}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar






