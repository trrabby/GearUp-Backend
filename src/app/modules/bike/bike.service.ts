import prisma from "../../../shared/prisma";
import { IBike } from "./bike.interface";

// create Bike
const createBike = async (data: IBike) => {
  try {
    await prisma.customer.findUniqueOrThrow({
      where: {
        customerId: data.customerId,
      },
    });

    const bikeData = {
      brand: data.brand,
      model: data.model,
      year: data.year,
      customerId: data.customerId,
    };

    const result = await prisma.bike.create({
      data: bikeData,
    });

    return result;
  } catch (err) {
    throw new Error("failed to create Bike");
  }
};

// get All Bike
const getAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// get A Bike
const getABike = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  if (!result) {
    throw new Error("Bike not found");
  }

  return result;
};
export const bikeService = {
  createBike,
  getAllBike,
  getABike,
};
