import mongoose from "mongoose";

// this is task schema

const taskSchema = new mongoose.Schema({
  userID : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User',
    required : true
  },
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  status:{
    type : String,
    enum : ['pending' , 'inProgress' , 'completed'],
    default : 'pending'
  },
  date : {
    type : Date,
    default : Date.now()
  }
},{
    timeStamps : true
});

export default taskSchema;
