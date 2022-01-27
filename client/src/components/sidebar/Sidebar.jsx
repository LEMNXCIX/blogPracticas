import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {SocialContainer, SocialIcon}from "../Footer"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Categorias</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link key={index} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Acerca de Nosotros</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Uleamnuevo.png/200px-Uleamnuevo.png"
          alt=""
        />
        <p>
          Universidad Laica Eloy Alfaro de Manabí extesión en El Carmen -
          Agropecuaria
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Siguenos</span>
        <div className="sidebarSocial">
        <SocialContainer>
          <Link
            to={{ pathname: "https://web.facebook.com/UleamEc/?_rdc=1&_rdr" }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <SocialIcon
              color="4267B2"
              className="fab fa-facebook-f"
            ></SocialIcon>
          </Link>

          <Link
            to={{
              pathname:
                "https://twitter.com/UleamEcuador?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <SocialIcon color="1da1f2" className="fab fa-twitter"></SocialIcon>
          </Link>
          <Link
            to={{
              pathname:
                "https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <SocialIcon color="ff0000" className="fab fa-youtube"></SocialIcon>
          </Link>
        </SocialContainer>
        
        </div>
      </div>
    </div>
  );
}
