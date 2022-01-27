import React from "react";
import styled from "styled-components";
import MapWithAMarker from "../elements/map";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
export const AboutUs = () => {
  return (
    <>
      <Container>
        <Rigth>
          <Title>Universidad Eloy Alfaro de Manabí </Title>
          <center>
            {" "}
            <Text>
              <Link
                to={{ pathname: "https://www.uleam.edu.ec/" }}
                target="_blank"
              >
                <img
                  style={{ width: "250px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Uleamnuevo.png/200px-Uleamnuevo.png"
                  alt=""
                />
              </Link>
            </Text>{" "}
          </center>
          <Subtitle>Mision</Subtitle>
          <Text>
            Formar profesionales competentes y emprendedores desde lo académico,
            la investigación y la vinculación, que contribuyan a mejorar la
            calidad de vida de la sociedad.
          </Text>
          <Subtitle>Vision</Subtitle>
          <Text>
            Ser un referente nacional e internacional de Institución de
            Educación Superior que contribuye al desarrollo social, cultural y
            productivo con profesionales éticos, creativos, cualificados y con
            sentido de pertinencia.
          </Text>
        </Rigth>
        <Left>
          <Subtitle>Ubicanos</Subtitle>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbVG4Cam_31k7bhHMJPMbbTgWXNXjhrrs&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `94%` }} />}
            mapElement={<div style={{ height: `100%`, borderRadius: "4px" }} />}
          />
        </Left>
      </Container>
      <Footer />
    </>
  );
};
const Container = styled.div`
  display: flex;
  margin: auto;
  width: 90vw;
`;
const Rigth = styled.div`
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
`;
const Subtitle = styled.h3`
  padding: 5px;
`;
const Title = styled.h1`
  margin: 10px;
`;
const Text = styled.p``;
