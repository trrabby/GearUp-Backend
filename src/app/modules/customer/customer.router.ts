import express from "express";
import { customerController } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  createCustomerZodSchema,
  updateCustomerZodSchema,
} from "./customer.validation";

const router = express.Router();

// create customer
router.post(
  "/",
  validateRequest(createCustomerZodSchema),
  customerController.createCustomer
);

// get All Customer
router.get("/", customerController.getAllCustomer);

// get All Customer
router.get("/:customerId", customerController.getACustomer);

//updated Customer
router.put(
  "/:customerId",
  validateRequest(updateCustomerZodSchema),
  customerController.updateCustomer
);

//updated Customer
router.delete("/:customerId", customerController.deleteCustomer);

export const customerRouter = router;
