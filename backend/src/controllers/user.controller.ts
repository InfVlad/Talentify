import { Request, Response } from 'express';
import { UserDto } from '../dto/user.dto'; // Ensure path to your DTO is correct
import userService from '../services/user.service'; // Ensure correct import of service
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

class UserController {
  async createUser(req: Request, res: Response) {
    const userDto = plainToInstance(UserDto, req.body);

    const errors = await validate(userDto);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const { fullName, email, password, role, companyId } = userDto[0];

    try {
      const newUser = await userService.createUser(fullName, email, password || '', role, companyId);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await userService.getUserById(Number(id));

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const userDto = plainToInstance(UserDto, req.body);

    const errors = await validate(userDto);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const { fullName, email, password, role, companyId } = userDto[0];

    try {
      const updatedUser = await userService.updateUser(
        Number(id),
        fullName,
        email,
        password || '',
        role,
        companyId
      );
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await userService.deleteUser(Number(id));
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new UserController();
