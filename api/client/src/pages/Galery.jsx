import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";
import { axiosInstance } from "../config";
// require Img from "../../../api/images/1640039615148Captura web_18-12-2021_182453_github.com.jpeg"

export const Galery = () => {
  const [galery, setGalery] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/galery" + search);
      setGalery(res.data);
    };
    fetchPosts();
  }, [search]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getGalery = async () => {
      const res = await axiosInstance.get("/galery");
      setGalery(res.data);
    };
    getGalery();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGal = {
      name,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newGal.photo = filename;
      try {
        await axiosInstance.post("/uploadGalery", data);
      } catch (err) {}
    }
    try {
      await axiosInstance.post("/galery", newGal);
      //esto pasa la imagen a la api para subir la info a mongo
      window.location.replace("/galery/");
      //"Actualiza la vista"
    } catch (err) {}
  };
  const PF = "http://localhost:5000/galery/";
  const { user, dispatch } = useContext(Context);
  return (
    <Container>
      {user ? (
        <Form className="writeForm" onSubmit={handleSubmit}>
          <span className="textSpan">Anade una imagen</span>
          <label className="label" htmlFor="fileInput">
            <i className="writeIcon far fa-image" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button type="submit">Publicar</Button>
        </Form>
      ) : (
        <></>
      )}
      <Title>Galeria de imagenes</Title>
      <ImageContainer>
        {galery.map((c, index) => (
          <Img key={index} alt="" src={PF + c.photo} />
        ))}
        {console.log(galery)}
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div``;
const Button = styled.button`
  color: white;
  background-color: rgb(255, 126, 40, 0.7);
  margin: 0px 20px;
  color: black;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  transition-duration: 0.4s;
  &:hover {
    background-color: rgb(255, 126, 40);
  }
`;
const ImageContainer = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0px 30px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
const Title = styled.h3`
    margin: 30px;
`