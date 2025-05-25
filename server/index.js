import app from "./app.js";
import {PORT} from './constant.js'




app.listen(PORT,()=>{
    console.log(`App is listining at port :${PORT}`)
})