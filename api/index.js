const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const galeryRoute = require("./routes/galery");
const multer = require("multer");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");

//Inicializar
const app = express();

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/galery", express.static(path.join(__dirname, "/galery")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const storageGalery = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "galery");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
const uploadGalery = multer({ storage: storageGalery });
app.post("/api/uploadGalery", uploadGalery.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded at galery");
});

//Midleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//Rutas
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/galery", galeryRoute);


//middleware para express para usa este directorio como una carpeta estatica
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//Variable globlal
app.use((req, res, next) => {
  res.locals.messege = req.flash("messege");
  next();
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend esta funcionando.");
});