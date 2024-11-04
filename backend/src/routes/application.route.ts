import { Router } from "express";
import { ApplicationController } from "../controllers/application.controller";
import { isAuth } from "../helpers/authenticate.helper";

const applicationController = new ApplicationController();

const router = Router();

router.post("/",isAuth, (req, res) => applicationController.createApplication(req, res));
router.get("/",isAuth, (req, res) => applicationController.getAllApplications(req, res));
router.get("/:id",isAuth, (req, res) => applicationController.getApplicationById(req, res));
router.put("/:id",isAuth, (req, res) => applicationController.updateApplication(req, res));
router.delete("/:id",isAuth, (req, res) => applicationController.deleteApplication(req, res));

export default router;
