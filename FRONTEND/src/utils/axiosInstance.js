import axios from "axios";

const API = axios.create({
  baseURL: "https://url-shortner-backend-s7q5.onrender.com",
  withCredentials: true,
});

export default API;