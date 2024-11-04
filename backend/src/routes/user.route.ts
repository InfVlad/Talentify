import { Router, Request, Response } from 'express';
import userController from '../controllers/user.controller'; // Make sure this path is correct
import asyncHandler from '../middlewares/async.handler.middleware'; // Correct import
import { isAuth } from '../helpers/authenticate.helper';

const router = Router();

// Route to create a new user
router.post('/',isAuth, asyncHandler((req: Request, res: Response) => userController.createUser(req, res)));

// Route to get all users
router.get('/',isAuth, asyncHandler((req: Request, res: Response) => userController.getAllUsers(req, res)));

// Route to get a user by ID
router.get('/:id',isAuth, asyncHandler((req: Request, res: Response) => userController.getUserById(req, res)));

// Route to update a user by ID
router.put('/:id',isAuth, asyncHandler((req: Request, res: Response) => userController.updateUser(req, res)));

// Route to delete a user by ID
router.delete('/:id',isAuth, asyncHandler((req: Request, res: Response) => userController.deleteUser(req, res)));

export default router;
