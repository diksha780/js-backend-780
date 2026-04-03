import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


connectDB(); 
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server is running')
})
      app.listen(port, () => {
    console.log(   `Server is running on port ${port}`)

//     async() => {
//         try{
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error", (error) => {
//     console.log("ERROR : ", error);
//     throw error
// })
      
})
    //     }
    //     catch(error) {
    //         console.log("Error : ", error)
    //         throw error
    //     }
    // }

