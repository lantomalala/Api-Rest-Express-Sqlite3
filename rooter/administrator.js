const express = require("express");
const Administrator = require("../model/Administrator");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const NewAdministrator = await Administrator.findAll();
    res.json(NewAdministrator);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  }
});

router.post("/", async (req, res) => {
  try {
    const NewAdministrator = await Administrator.create({
        administrator_login: req.body.administrator_login,
        administrator_password: req.body.administrator_password,
    });
    res.json(NewAdministrator);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
