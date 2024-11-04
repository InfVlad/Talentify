import { Router } from "express";
import { ExperienceController } from "../controllers/experience.controller";
import { isAuth } from "../helpers/authenticate.helper";

const experienceController = new ExperienceController()

const router = Router()

router.post('/', isAuth, (req, res) => experienceController.createExperience(req, res))

router.get('/', isAuth, (req, res) => experienceController.getAllExperiences(req, res))

router.get('/:id', isAuth, (req, res) => experienceController.getExperienceById(req, res))

router.put('/:id', isAuth, (req, res) => experienceController.updateExperience(req, res))

router.delete('/:id', isAuth, (req, res) => experienceController.deleteExperience(req, res))

export default router
