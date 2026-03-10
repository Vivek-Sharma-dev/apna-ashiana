import { Router } from "express";
import wrapAsync from "../utils/wrapAsync.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import multer from "multer";
import {
  createListing,
  deleteListing,
  getAllListings,
  getListingById,
  updateListing,
} from "../controllers/listingController.js";

const upload = multer();
const router = Router();
router.get("/", wrapAsync(getAllListings));
router.get("/:id", wrapAsync(getListingById));
router.post("/", upload.none(), validationMiddleware, wrapAsync(createListing));

router.patch("/:id", validationMiddleware, wrapAsync(updateListing));
router.delete("/:id", wrapAsync(deleteListing));

export default router;
