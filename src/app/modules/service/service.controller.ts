import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { serviceService } from "./service.service";

// create Service
const createService = catchAsync(async (req, res) => {
  const result = await serviceService.createService(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

//get All Service
const getAllService = catchAsync(async (req, res) => {
  const result = await serviceService.getAllService();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

//get A Service
const getAService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await serviceService.getAService(serviceId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

//Update A Service
const updateService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await serviceService.updateService(serviceId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

// get Overdue Or Pending Services

const getOverdueOrPendingServices = catchAsync(async (_req, res) => {
  const result = await serviceService.getOverdueOrPendingServices();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllService,
  getAService,
  updateService,
  getOverdueOrPendingServices,
};
