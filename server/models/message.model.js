import mongoose from "mongoose";


const messageSchema= new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
     to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    msg:{
        type:String,
        required:true
    }
},{timestamps:true})


export default mongoose.model('Message',messageSchema)