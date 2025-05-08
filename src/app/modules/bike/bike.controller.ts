import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bikeService } from "./bike.service";
import status from "http-status";

// create bike
const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBike(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "bike Created successfully!",
    data: result,
  });
});

//get All bike
const getAllBike = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBike();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "bike get successfully!",
    data: result,
  });
});

//get A bike
const getABike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;

  const result = await bikeService.getABike(bikeId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " get a bike  successfully!",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBike,
  getABike,
};
