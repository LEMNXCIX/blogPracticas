const router = require("express").Router();
const Galery = require("../models/Galery");

router.post("/", async (req, res) => {
  const newGal = new Galery(req.body);
  try {
    const savedGal = await newGal.save();
    res.status(200).json(savedGal);
    console.log("guardado")
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const gals = await Galery.find();
      res.status(200).json(gals);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
