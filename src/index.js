import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
.catch((err) =>{
    console.log("MongoDB Connection Failed !!!", err)
    
}); 


app.get('/', (req, res) => {
    res.send('Server is running')
})
      

//     async() => {
//         try{
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error", (error) => {
//     console.log("ERROR : ", error);
//     throw error
// })
      

    //     }
    //     catch(error) {
    //         console.log("Error : ", error)
    //         throw error
    //     }
    // }

