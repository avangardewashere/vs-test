import mongoose from "mongoose";


const connectMongoDB = async() => {
    console.log("url: ", process.env.MONGODB_URI);
    try{
 
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Connected to MongoDB.")
      
    }catch(err){
        console.log(err)
    }
}

export default connectMongoDB