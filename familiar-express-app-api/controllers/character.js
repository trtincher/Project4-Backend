const express = require("express");
const router = express.Router();

// Require the character.
const Character = require("../models/character");

// List all characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find({});
    res.send(characters);
  } catch {
    res.send("nope");
  }
});

// Get character by name
router.get("/name/:name", async (req, res) => {
  try {
    const character = await Character.find({
      name: req.params.name,
    });
    res.send(character);
  } catch {
    res.send("nope");
  }
});

// Get character by id
router.get("/:id", async (req, res) => {
    try {
      const character = await Character.find({
        _id: req.params.id,
      });
      res.send(character);
    } catch {
      res.send("nope");
    }
  });

// Create a character
router.post("/", (req, res) => {
  Character.create(req.body, (err, character) => {
    if (err) console.log(err);
    else res.send(character);
  });
});

// Update a character by id
router.put("/:id", (req, res) => {
  Character.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) console.log(err);
      else res.send(updated);
    }
  );
});

// Delete a character by id
router.delete("/:id", (req, res) => {
  Character.deleteOne({ _id: req.params.id }, (err, deleted) => {
    if (err) console.log(err);
    else res.send(deleted);
  });
});




module.exports = router;
