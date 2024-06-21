const express = require("express");
const sequelize = require("../config/database");
const User = require("../model/User");
const router = express.Router();

router.use(express.json());
// =====================[GET LISTE ADDRESS]=====================
router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST]=====================
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(newUser);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});



module.exports = router;
