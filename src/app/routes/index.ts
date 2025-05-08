import express from "express";
import { customerRouter } from "../modules/customer/customer.router";
import { bikeRouter } from "../modules/bike/bike.router";
import { serviceRouter } from "../modules/service/service.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRouter,
  },
  {
    path: "/bikes",
    route: bikeRouter,
  },
  {
    path: "/services",
    route: serviceRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
