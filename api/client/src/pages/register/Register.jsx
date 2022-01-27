import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance
        .post("/auth/register", {
          username,
          email,
          password,
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data.mensaje);
            setErrorMsg(error.response.data.mensaje);
            
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      res.data && window.location.replace("/login");
      console.log(res.data.mensaje);
    } catch (err) {
    

      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Registrate</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Nombre de usuario</label>
        <input
          type="text"
          autoComplete="username"
          className="registerInput"
          placeholder="Nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Correo electronico</label>
        <input
          type="email"
          autoComplete="email"
          className="registerInput"
          placeholder="ejemplo@correo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Conntrasenia</label>
        <input
        autoComplete="current-password"
          type="password"
          className="registerInput"
          placeholder="Contrasenia"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Registrate
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Inicia sesion
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>{errorMsg}</span>
      )}
    </div>
  );
}
