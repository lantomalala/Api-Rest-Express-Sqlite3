const express = require("express");
const sequelize = require("../config/database");
const Shopping_cart = require("../model/Shopping_cart");
const router = express.Router();

router.use(express.json());

// =====================[GET LISTE Shopping_cart]=====================
router.get("/", async (req, res) => {
  try {
    // Authentifie la connexion à la base de données
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Récupère tous les utilisateurs et send response
    const newShopping_cart = await Shopping_cart.findAll();
    res.json(newShopping_cart);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST]=====================
router.post("/", async (req, res) => {
  try {
    const newShopping_cart = await Shopping_cart.create({
        cart_price_ht: req.body.cart_price_ht,
        tva: req.body.tva,
        cart_price_ttc: req.body.cart_price_ttc,
        cart_closed: req.body.cart_closed,
        cart_canceled: req.body.cart_canceled,
        quantity_article: req.body.quantity_article,
    });
    res.json(newShopping_cart);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});



module.exports = router;
