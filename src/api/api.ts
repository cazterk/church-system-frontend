import axios from "axios";

const url = import.meta.env.VITE_API_URL;
export const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
  // withCredentials: true,
});
