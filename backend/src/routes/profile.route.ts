import { Router } from "express";
import { ProfileController } from "../controllers/profile.controller";
import { isAuth } from "../helpers/authenticate.helper";

const profileController = new ProfileController();
const router = Router();

router.post("/",isAuth,(req, res) => profileController.createProfile(req, res));
router.get("/", isAuth, (req, res) => profileController.getAllProfiles(req, res));
router.get("/:id",isAuth,(req, res) => profileController.getProfileById(req, res));
router.put("/:id",isAuth,(req, res) => profileController.updateProfile(req, res));
router.delete("/:id",isAuth,(req, res) => profileController.deleteProfile(req, res));

export default router;

