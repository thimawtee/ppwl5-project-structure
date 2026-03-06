import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll() {
    return userRepository.findAll().map(u => new UserModel(u));
  },

  create(data: { name: string; role: string }): void {
    // Implementation to create a new user
  },

  delete(id: number) {
    // implementasikan delete dari userRepository
  }
};
