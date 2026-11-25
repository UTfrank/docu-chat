import { CreateUserInput, UpdateUserInput } from "../schemas/user.schema.js";
import { prisma } from "../lib/prisma.js";

export const getAllUsers = async() => {
  return prisma.user.findMany({
    orderBy: {
      id: "asc"
    }
  });
}

export const getUserById = async(id: number) => {
  return prisma.user.findUnique({
    where: {
      id
    }
  })
}

export const createNewUser = async (input: CreateUserInput) => {
  return prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
    }
  });
}

export const editUser = async (id: number, input: UpdateUserInput) => {
  return prisma.user.update({
    where: {
      id
    },
    data: input
  });
}

export const removeUser = async (id: number) => {
  return prisma.user.delete({
    where: {
      id
    }
  });
}