import dotenv from 'dotenv'
dotenv.config()

const PORT=5000;
const mongoDb_URI=`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.khqie.mongodb.net`



export {PORT,mongoDb_URI}