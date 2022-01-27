import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      {/* <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div> */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>{" "}
          <li className="topListItem">
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/galeria">
              Galeria
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/acercade">
              Acerca de nosotros
            </Link>
          </li>
                 
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
           <li className="topListItem">
            <Link className="link" to="/write">
              Escribir
            </Link>
          </li> <Link className="link" to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Cerrar sesion" }
          </li>
          
          </>
         
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Iniciar sesion
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Registrate
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
