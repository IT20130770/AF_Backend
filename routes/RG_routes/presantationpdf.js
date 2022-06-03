const express = require("express");
const Presantation = require('../../models/RG_models/presantation');
const router = express.Router();


router.post("/presantation", (req, res) => {
    let newpresantation= new Presantation(req.body);
    newpresantation.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Presantation Templates Upload Successfully !!!",
      });
    });
  });

//get pdf 
router.get("/presantationpdfdisplay",async (req, res) => {
  const pdf = await Presantation.find();
  try {
    res.json(pdf)
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with PDF Fetched", error: error.message });
  }
});
  module.exports = router;