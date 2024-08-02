const express = require("express");

const router = express.Router();

const task = require("../models/task");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const Task = new task(req.body);
    await Task.save();
    res.status(200).json({ message: "Added Successfully", Task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const Task = await task.findByIdAndUpdate(id, dataToUpdate, { new: true });
    res.status(200).json({ message: "updated successfully", Task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await task.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
