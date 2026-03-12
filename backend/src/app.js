import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/listings", listingRoutes);

app.use((err, req, res, next) => {
  console.log("error middleware is called");
  console.error(err.stack);
  console.log(err.name);
  res.status(500).json({ message: "Internal Server Error" });
});
 
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
