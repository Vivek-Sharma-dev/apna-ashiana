import { Router } from "express";
import wrapAsync from "../utils/wrapAsync.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import { upload } from "../config/cloudinary.js";
import {
  createListing,
  deleteListing,
  getAllListings,
  getListingById,
  updateListing,
} from "../controllers/listingController.js";

const router = Router();
router.get("/", wrapAsync(getAllListings));
router.get("/:id", wrapAsync(getListingById));
router.post("/", upload.fields([
  { name: "image", maxCount: 1 },
  {name: "images", maxCount: 5},
]) , validationMiddleware, wrapAsync(createListing));
 
router.patch("/:id", validationMiddleware, wrapAsync(updateListing));
router.delete("/:id", wrapAsync(deleteListing));

export default router;
