const express = require("express");
const sequelize = require("../config/database");
const Status = require("../model/Status");
const router = express.Router();

router.use(express.json());

// =====================[GET LISTE ADDRESS]=====================

router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const newStatus = await Status.findAll();
    res.json(newStatus);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST]=====================

router.post("/", async (req, res) => {
  try {
    const newStatus = await Status.create({
      status_name: req.body.status_name,
    });
    res.json(newStatus);
  } catch (error) { 
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
