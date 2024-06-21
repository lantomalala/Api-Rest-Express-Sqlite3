const express = require("express");
const sequelize = require("../config/database");
const Carrier = require("../model/Carrier");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const newCarrier = await Carrier.findAll();
    res.json(newCarrier);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

router.post("/", async (req, res) => {
  try {
    const newCarrier = await Carrier.create({
        carrier_name : req.body.carrier_name,
    });
    res.json(newCarrier);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});



module.exports = router;
