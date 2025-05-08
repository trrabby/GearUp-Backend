import status from "http-status";
import prisma from "../../../shared/prisma";
import { ICustomer } from "./customer.interface";

// create customer
const createCustomer = async (data: ICustomer) => {
  try {
    const customerData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const result = await prisma.customer.create({
      data: customerData,
    });

    return result;
  } catch (err) {
    throw new Error("failed to create customer");
  }
};

// get All Customer
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// get A Customer
const getACustomer = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId },
  });

  if (!result) {
    throw new Error("Customer not found");
  }

  return result;
};

/// update customer
const updateCustomer = async (customerId: string, data: Partial<ICustomer>) => {
  console.log(customerId, data);
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.customer.findUniqueOrThrow({
      where: { customerId },
    });

    const updatedCustomer = await transactionClient.customer.update({
      where: { customerId },
      data: data,
    });

    return updatedCustomer;
  });

  return result;
};

/// delete customer
const deleteCustomer = async (customerId: string) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.customer.findUniqueOrThrow({
      where: { customerId },
    });

    const deleteCustomer = await transactionClient.customer.delete({
      where: { customerId },
    });

    return deleteCustomer;
  });

  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomer,
  getACustomer,
  updateCustomer,
  deleteCustomer,
};
