const express = require("express");
const router = express.Router();

// Require the user and character models.
const User = require("../models/user");
const Character = require("../models/character");

// List all users
router.get("/", async (req, res) => {
    try {
      const users = await User.find({}).populate("characters");
      res.send(users);
    } catch {
      res.send("nope");
    }
  });
  
  // Get user by name
  router.get("/name/:name", async (req, res) => {
    try {
      const user = await User.find({
        name: req.params.name,
      }).populate("characters");
      res.send(user);
    } catch {
      res.send("nope");
    }
  });
  
  // Get user by email
  router.get("/email/:email", async (req, res) => {
    try {
      const user = await User.find({
        email: req.params.email,
      }).populate("characters");
      res.send(user);
    } catch {
      res.send("nope");
    }
  });

    // Get user by id
    router.get("/:id", async (req, res) => {
        try {
          const user = await User.find({
            _id: req.params.id,
          }).populate("characters");
          res.send(user);
        } catch {
          res.send("nope");
        }
      });
  
  // Create a user
  router.post("/", (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) console.log(err);
      else res.send(user);
    });
  });
  
  // Update a user by id
  router.put("/:id", (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, updated) => {
        if (err) console.log(err);
        else res.send(updated);
      }
    );
  });
  
  // Delete a user by id
  router.delete("/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err, deleted) => {
      if (err) console.log(err);
      else res.send(deleted);
    });
  });
  
  // Add character to user's characters (addConnectionButton)
  router.put("/:userid/addCharacter/:characterid", (req, res) => {
    Character.findById(req.params.characterid, (err, character) => {
      if (err) console.log(err);
      else {
        User.findByIdAndUpdate(
          req.params.userid,
          {
            $push: {
              characters: character,
            },
          },
          { new: true },
          (err, user) => {
            if (err) console.log(err);
            else res.send(user);
          }
        );
      }
    });
  });
  
  // Remove single character from user's myTeachers (works!)
  router.delete("/:userid/removeCharacter/:characterid", (req, res) => {
    Character.findById(req.params.characterid, (err, character) => {
      if (err) console.log(err);
      else {
        User.findByIdAndUpdate(
          req.params.userid,
          {
            $pull: {
              characters: character._id,
            },
          },
          { new: true },
          (err, user) => {
            if (err) console.log(err);
            else res.send(user);
          }
        );
      }
    });
  });
  
  module.exports = router;