import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
