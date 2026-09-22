import { User, CreateUserInput, UpdateUserInput } from "../types/user.types.js";

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export const getAllUsers = (): User[] => {
  return users;
}

export const getUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id)
}

export const createNewUser = (input: CreateUserInput): User => {
  const newUser: User = {
    id: users.length + 1,
    name: input.name,
  };

  users.push(newUser);

  return newUser;
}

export const editUser = (id: number, input: UpdateUserInput): User | undefined => {
  const user = users.find(u => u.id === id);

  if (!user) {
    return undefined
  }

  if (input.name !== undefined) {
    user.name = input.name
  }

  return user;
}

export const removeUser = (id: number): boolean => {
  const user = users.find(u => u.id === id);

  if (!user) {
    return false;
  }

  users = users.filter(u => u.id !== id);

  return true;
}