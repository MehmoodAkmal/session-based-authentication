import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique : true
    },
    password : {
        type:String,
        required: true
    },
    role : {
        type : String,
        enum : ['user', 'admin' , 'superadmin'],
        default : 'user',
        required : true
    }
},{
    timeStamps : true
});

export default userSchema;