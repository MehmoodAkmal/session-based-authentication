import express from 'express';
import { getAllTasks , addNewTask , updateTask , deleteTask } from '../controllers/taskControllers.js';
const router = express.Router();
import { authenticateUser } from '../auth/authMiddleware.js';



router.get('/getAllTasks' , authenticateUser , getAllTasks);
router.post('/addNewTask' , authenticateUser , addNewTask);
router.put('/updateTask/:_id' , authenticateUser , updateTask);
router.delete('/deleteTask/:_id' , authenticateUser , deleteTask);

export default router;


