import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Login = () => {


  const [Credentials, Setcredentials] = useState({ name: "", email: "", password: "" });

  const [loading, setloading] = useState(false)

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setloading(true)


    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: Credentials.email, password: Credentials.password }),
      });



      const json = await response.json();

      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken)
        navigate("/showbook")
      }

      

    } catch (error) {
      console.error("login failed");
    } finally {

      setloading(false);
    }


  };

  const onchange = (e) => {

    Setcredentials({ ...Credentials, [e.target.name]: e.target.value })

  }






  return (
    <div className=' login container'>


      {loading && <Spinner />}


      <div className='container'>

        <h1>Login Your Account</h1>

        <br />

        <form>

          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" name='email' id="email" value={Credentials.email} onChange={onchange} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" name='password' value={Credentials.password} onChange={onchange} />
            </div>
          </div>
          <button disabled={Credentials.password.length < 6} type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>

      </div>






    </div>
  )
}

export default Login
