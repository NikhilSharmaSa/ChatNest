import app from "./app.js";
import {PORT} from './constant.js'
import connectDB from "./db/db.js";

connectDB()
.then(()=>{
app.listen(PORT,()=>{
    console.log(`App is listining at port :${PORT}`)
})
}).catch((error)=>{
    console.log('Database not Connected'+error)
})
