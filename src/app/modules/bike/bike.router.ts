import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createBikeZodSchema } from "./bike.validation";
import { bikeController } from "./bike.controller";

const router = express.Router();

// create customer
router.post(
  "/",
  validateRequest(createBikeZodSchema),
  bikeController.createBike
);

// get All Customer
router.get("/", bikeController.getAllBike);

// get All Customer
router.get("/:bikeId", bikeController.getABike);

export const bikeRouter = router;
