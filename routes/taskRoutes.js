import express from "express";
import {
  getAllTasks,
  addNewTask,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";
const router = express.Router();
import { authenticateUser } from "../auth/authMiddleware.js";
import User from "../models/userModel.js";

const role = ["user", "admin", "superadmin"];

router.get("/getAllTasks", authenticateUser(["admin", "user"]), getAllTasks);
router.post("/addNewTask", authenticateUser(["admin", "user"]), addNewTask);
router.put("/updateTask/:_id", authenticateUser(["admin", "user"]), updateTask);
router.delete("/deleteTask/:_id", authenticateUser(["superadmin"]), deleteTask);

export default router;
