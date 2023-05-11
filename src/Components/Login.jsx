import { React, useState } from "react";
import '../stylesheets/Login.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config.js';

function Login(props) {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [redirectToHome , setRedirectToHome] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/usuarios/login`, { username, password });
      props.onLogin(response.data.token);
      setRedirectToHome(true);
    } catch (error) {  
      const codeStatus = error.response.status;
      if(codeStatus === 404){
        alert("Nombre de usuario inválido!");
      }else if(codeStatus === 401){
        alert("Credenciales inválidas!");
      }else{
        alert("Oops ocurrió un error inesperado. Intente nuevamente!");
      }
    }
  };

  return (
    <div className="container d-flex">
      <form className="form" onSubmit={handleSubmit} >
        <p>Login</p>
        <div className="group">
          <input maxLength={100} required className="main-input" type="text" onChange={(e) => setUsername(e.target.value)}/>
          <span className="highlight-span"></span>
          <label className="lebal-email">Username</label>
        </div>
        <div className="container-1">
          <div className="group">
            <input maxLength={100} required className="main-input" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <span className="highlight-span"></span>
            <label className="lebal-email">Password</label>
          </div>
        </div>
        <button className="submit">Acceder</button>
      </form>
      {redirectToHome && <Navigate to="/" />}
    </div>
  );
}

export default Login;