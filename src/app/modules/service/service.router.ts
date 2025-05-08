import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  ServiceRecordValidationSchema,
  UpdateServiceStatusSchema,
} from "./service.validation";
import { serviceController } from "./service.controller";

const router = express.Router();

// create service
router.post(
  "/",
  validateRequest(ServiceRecordValidationSchema),
  serviceController.createService
);

// get All service
router.get("/", serviceController.getAllService);

// get All service
router.get("/:serviceId", serviceController.getAService);

// updated service
router.put(
  "/:serviceId/complete",
  validateRequest(UpdateServiceStatusSchema),
  serviceController.updateService
);

// get Overdue Or Pending Services
router.get("/status", serviceController.getOverdueOrPendingServices);

export const serviceRouter = router;
