const express = require("express");
const UserNext = require("../model/UserNext");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const usersNext = await UserNext.findAll();
    res.json(usersNext);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserNext = await UserNext.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(newUserNext);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
