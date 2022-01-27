import { useContext, useState, useEffect } from "react";

import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Inserta un titulo"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <div className="writeOptions">
            <div className="writeOption">
              <span className="textSpan">Anade una imagen</span>
              <label className="label" htmlFor="fileInput">
                <i className="writeIcon far fa-image"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="writeOption">
              <span>Seleciona una categoria</span>
              <select
                name=""
                id=""
                onChange={(e) => setCategories(e.target.value)}
              >
                <option>Categorias</option>
                {cats.map((c) => (
                  <option>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="writeOption">
              {" "}
              <button className="writeSubmit" type="submit">
                Publicar
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Escribe algo..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
