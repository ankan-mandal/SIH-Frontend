import axios from "axios"; 

export default axios.create({
  baseURL: "https://sih-backend-pi.vercel.app"
  // baseURL : 'https://sih-ecom.onrender.com'
});

