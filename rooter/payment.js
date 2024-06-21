const express = require("express");
const sequelize = require("../config/database");
const Payment = require("../model/Payment");
const router = express.Router();

router.use(express.json());
// =====================[GET LISTE ADDRESS]=====================
router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const newPayment = await Payment.findAll();
    res.json(newPayment);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST]=====================
router.post("/", async (req, res) => {
  try {
    const newPayment = await Payment.create({
      payment_name: req.body.payment_name,
    });
    res.json(newPayment);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
