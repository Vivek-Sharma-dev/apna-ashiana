import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const LISTING_API = axios.create({
  baseURL: API_URL as string,
});

export default LISTING_API;
