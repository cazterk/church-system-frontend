import axios from "axios";
import authHeader from "src/services/auth-header";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
  // withCredentials: true,
});
