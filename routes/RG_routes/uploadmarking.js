const express = require("express");
const uploadmarking = require('../../models/RG_models/uploadmarking');
const router = express.Router();


router.post("/marking", (req, res) => {
    let newmarking= new uploadmarking(req.body);
    newmarking.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Marking Schema Upload Successfully !!!",
      });
    });
  });

  module.exports = router;