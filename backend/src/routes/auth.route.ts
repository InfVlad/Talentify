import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

const authController = new AuthController(authService);

const router = Router();

// Función auxiliar para manejar controladores asíncronos y capturar errores
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/signup", asyncHandler((req: any, res: any) => authController.signup(req, res)));

router.post("/login", asyncHandler((req: any, res: any) => authController.login(req, res)));

router.get("/me", asyncHandler((req: any, res: any) => authController.getUserFromToken(req, res)));

export default router;

