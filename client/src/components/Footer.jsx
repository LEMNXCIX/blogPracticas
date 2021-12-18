import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhoneAlt,
// } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <Container>
      <hr />
      <Left>
        <Logo>
          <img
            style={{ width: "120px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Uleamnuevo.png/200px-Uleamnuevo.png"
            alt=""
          />
          <Title>
            Universidad Laica Eloy Alfaro de Manabí extesión en El Carmen -
            Agropecuaria
          </Title>
        </Logo>
        <Description>
          Formar profesionales competentes y emprendedores desde lo académico,
          la investigación, y la vinculación, que contribuyan a mejorar la
          calidad de vida de la sociedad, siendo un referente nacional e
          internacional de Institución de Educación Superior que contribuye al
          desarrollo social, cultural y productivo con profesionales éticos,
          creativos, cualificados y con sentido de pertinencia.
        </Description>
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
      </Left>
      <Center></Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <SocialIcon
            color="000000"
            className="fas fa-map-marker-alt"
          ></SocialIcon>
          Santo Domingo, por ahi
        </ContactItem>
        <ContactItem>
          <SocialIcon color="000000" className="fas fa-phone-alt">
            {/* <FontAwesomeIcon icon={faPhoneAlt} /> PhoneIcon */}
          </SocialIcon>{" "}
          +593 98 7654 321
        </ContactItem>
        <ContactItem>
          <SocialIcon color="000000" className="fas fa-envelope"></SocialIcon>
          contacto@micorreo.com
        </ContactItem>
      </Right>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialIcon = styled.div`
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  padding: 5px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
