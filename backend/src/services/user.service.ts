import { PrismaClient } from '@prisma/client';
import { Roles } from '../enums/roles.enum'

const prisma = new PrismaClient();

class UserService {
  // Create a new user
  async createUser(fullName: string, email: string, password: string, role: Roles, companyId?: number) {
    return await prisma.users.create({
      data: {
        fullName,
        email,
        password,
        role,
        companyId: companyId || null,
      },
    });
  }

  // Get all users
  async getAllUsers() {
    return await prisma.users.findMany();
  }

  // Get a single user by ID
  async getUserById(id: number) {
    return await prisma.users.findUnique({
      where: { id },
    });
  }

  // Update a user by ID
  async updateUser(id: number, fullName: string, email: string, password: string, role: Roles, companyId?: number) {
    return await prisma.users.update({
      where: { id },
      data: {
        fullName,
        email,
        password,
        role,
        companyId: companyId || null,
      },
    });
  }

  // Delete a user by ID
  async deleteUser(id: number) {
    return await prisma.users.delete({
      where: { id },
    });
  }
}

export default new UserService();
