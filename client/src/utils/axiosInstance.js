
import axios from "axios"; 

const server=import.meta.env.VITE_SERVER_URI
const axiosInstance = axios.create({
  baseURL : `${server}`,
  headers: {
//  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    
  }, 
  withCredentials:true
  // .. other options
});

export default axiosInstance;

