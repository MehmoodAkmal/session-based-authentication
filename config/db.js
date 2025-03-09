import mongoose from 'mongoose';

const connectDB = async ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(async ()=>console.log(`DataBase Is Connected....`))
    .catch(error=>console.log(`Database Connection Error : ${error}`));
};

export default connectDB;