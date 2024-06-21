const express = require("express");
const Customer = require("../model/Customer");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  }
});

router.post("/", async (req, res) => {
  try {
    const customers = await Customer.create({
        customer_mail: req.body.customer_mail,
        customer_lastname: req.body.customer_lastname,
        customer_firstname: req.body.customer_firstname,
        customer_birthdate:req.body.customer_birthdate,
        customer_password:req.body.customer_password,
    });
    res.json(customers);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
