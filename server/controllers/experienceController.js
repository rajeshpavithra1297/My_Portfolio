const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Experience = require("../models/Experience");

const getExperiences = async (req, res) => {
  try {
    const data = await Experience.find();

    if (!data) {
      res.status(400).json({
        message: "error",
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getExperiences;
