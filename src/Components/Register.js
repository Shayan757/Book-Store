import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Register = () => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [loading, setloading] = useState(false);

  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setloading(true)

    const response = await fetch("http://localhost:3000/api/auth/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();

    console.log(json);

    if (json.success) {
      
      localStorage.setItem("token", json.authtoken)

      navigate("/showbook")
    }


    


  }

  const onchange = (e) => {

    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }


  return (


    <>


      <div className='Register container'>

        {loading && <Spinner />}

        <div className='content container'>
          <h1>Register Your Account</h1>

          <br />

          <form>

            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name='name' id="name" value={credentials.name} onChange={onchange} />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" name='email' id="email" value={credentials.email} onChange={onchange} />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onchange} />
              </div>
            </div>
            <button disabled={credentials.name.length < 6 || credentials.password.length < 6} type="submit" className="btn btn-primary" onClick={handleRegister}>Register</button>
          </form>
        </div>


      </div>














    </>

  )
}

export default Register
