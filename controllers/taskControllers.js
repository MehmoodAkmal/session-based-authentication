import Task from "../models/taskModel.js";

// Add new task

export const addNewTask = async (req, res) => {
  const { title, description, date, status } = req.body;
  try {
    const task = await Task.create({
      createdBY: req.session.userID,
      role: req.session.user.role,
      title,
      description,
      status,
      date,
    });
    return res.status(200).json({
      Message: "Task added successfully",
      Task: task,
    });
  } catch (error) {
    console.log("🚀 ~ addNewTask ~ error:", error);
    return res.status(400).json({ Message: error.message });
  }
};

// get all tasks

export const getAllTasks = async (req, res) => {
  console.log("🚀 ~ addNewTask ~ req:", req.session);

  try {
    const tasks = await Task.find();
    return res.status(200).json({ All_Tasks: tasks });
  } catch (error) {
    console.log("🚀 ~ getAllTasks ~ error:", error);
    return res.status(400).json({ Message: error.message });
  }
};

// upDate task by id
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,

      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json({
      Message: "Task updated",
      updatedTask: task,
    });
  } catch (error) {
    console.log("🚀 ~ updateTask ~ error:", error);
    return res.status(400).json({ Message: error.message });
  }
};

// Delete Task

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    return res.status(200).json({ Message: "Task deleted" });
  } catch (error) {
    console.log("🚀 ~ deleteTask ~ error:", error);
    return res.status(400).json({ Message: error.message });
  }
};
