import Message from "../models/message.model.js"
import User from "../models/user.model.js"
import ApiError from "../utils/apiError.js"
import asyncHandler from "../utils/asyncHandler.js"
import CryptoJS from "crypto-js"
import Conversation from "../models/conversation.model.js"
import ApiResponse from "../utils/apiResponse.js"


//function for encryption 
const encryptMessage= async(message)=> {
  try {
    const ciphertext = CryptoJS.AES.encrypt(message, process.env.PREPARSE);

    return ciphertext.toString();
  } catch (error) {
    console.error("Error encrypting message:", error);
    return null;
  }
}


//function for decryption

function decryptMessage(encryptedString) {
  try {
  
    const bytes = CryptoJS.AES.decrypt(encryptedString, PASSPHRASE);


    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
  } catch (error) {
    console.error("Error decrypting message:", error);
    return null;
  }
}

const sendMessage=asyncHandler(async(req,res)=>{

const senderID=req.user._id
const {recieverID,msg}=req.body
if(!senderID) throw new ApiError(401,"Invalid Sender ID")

const findReciever=await User.findById(recieverID)
if(!findReciever) throw new ApiError(401,"Invalid Reciever ID")

if(!msg) throw new ApiError(401,"Please Enter a Valid Message!!")

    const encryptedMessage=await encryptMessage(msg)




let conversation =await Conversation.findOne({
   participants: { $all: [senderID, recieverID] },
    $expr: { $eq: [{ $size: "$participants" }, 2] }
})


if (!conversation){
  conversation=await Conversation.create({
    participants:[senderID,recieverID]
  })
}



    const newmessage=await Message.create({
        from:senderID,
        to:recieverID,
        msg:encryptedMessage

    })

    if(newmessage){
       conversation.messages.push(newmessage?._id)
      await conversation.save()
    }



    res.status(201).json(new ApiResponse(201,newmessage,"Message Send Successfully!!"))

})


const recieveMessage=asyncHandler(async(req,res)=>{

})



export {sendMessage,recieveMessage}