import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import session from 'express-session';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;
const secret_key = process.env.SESSION_SECRET;
// console.log("🚀 ~ secret_key:........................", secret_key);

app.use(express.json());
app.use(session({
    secret: secret_key,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use('/api/user' , userRoutes);
app.use('/api/task' , taskRoutes)


app.listen(port , () => {
    console.log(`Server is running at port : ${port}`);
});
