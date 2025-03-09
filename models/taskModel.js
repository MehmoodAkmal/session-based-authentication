import mongoose from 'mongoose';
import taskSchema from '../schema/taskSchema.js';

const taskModel = mongoose.model('Task' , taskSchema);

export default taskModel;