import mongoose from 'mongoose';
import userSchema from '../schema/userSchema.js';

const userModel = mongoose.model('User' , userSchema);

export default userModel;