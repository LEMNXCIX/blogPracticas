import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Inicio de sesion</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Nombre de usuario</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Nombre de usuario"
          ref={userRef}
        />
        <label>Contrasenia</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Contrasenia"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Iniciar sesion
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Registrate
        </Link>
      </button>
    </div>
  );
}
