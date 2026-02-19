// import { useState } from "react"

import { useEffect } from "react";
import API from "./api/api.ts";
import axios from "axios";

const App = () => {
  const getListings = async () => {
    try {
      const response = await API.get("/listings/699533ff4cebfdc6190cf3b");
      console.log(response.data); // This line logs the actual data from the API response
    } catch (error: unknown) {
      const msg = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "An unexpected error occurred";
      console.error("Error fetching listings:", msg);
    }
  };
  useEffect(() => {
    getListings();
  }, []);
  return (
    <div className="h-screen bg-black text-white">
      <h1>Radhe Radhe {10+20}</h1>
    </div>
  );
};

export default App;
