const express = require("express");
const Article = require("../model/Article");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const newArticle = await Article.findAll();
    res.json(newArticle);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newArticle = await Article.create({
        article_stock: req.body.article_stock,
        article_description: req.body.article_description,
        article_price: req.body.article_price,
        article_actif:req.body.article_actif,
    });
    res.json(newArticle);
  } catch (error) {
    console.error("Failed to create a new user:", error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
});

module.exports = router;
