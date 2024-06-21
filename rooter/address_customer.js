const express = require("express");
const sequelize = require("../config/database");
const Address_customer = require("../model/Address_customer");
const router = express.Router();

router.use(express.json());

// =====================[GET LISTE ADDRESS]=====================
router.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const address_customer = await Address_customer.findAll();
    res.json(address_customer);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  } 
});

// =====================[POST LISTE ADDRESS]=====================
router.post("/", async (req, res) => {
  try {
    const newAddress_customer = await Address_customer.create({
      street: req.body.street,
      level: req.body.level,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
      number: req.body.number,
    });
    res.json(newAddress_customer);
  } catch (error) {
    console.error("Failed to create a new address_customer:", error);
    res.status(500).json({ error: "Failed to create a new address_customer" });
  }
});

module.exports = router;
