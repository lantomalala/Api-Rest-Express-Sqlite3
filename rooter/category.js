const express = require("express");
const sequelize = require("../config/database");
const Category = require("../model/Category");
const router = express.Router();

router.use(express.json());
// =====================[GET LISTE ADDRESS]=====================
router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const NewCategory = await Category.findAll();
    res.json(NewCategory);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST]=====================
router.post("/", async (req, res) => {
  try {
    const NewCategory = await Category.create({
      category_name: req.body.category_name,
      category_description: req.body.category_description,
    });
    res.json(NewCategory);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
