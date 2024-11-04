import { Router } from "express";
import StudiesController from "../controllers/studies.controller";

const studiesRoute = Router();

studiesRoute.post("/", StudiesController.createStudies); //create
studiesRoute.get("/", StudiesController.getAllStudies); //getAll
studiesRoute.put("/:id", StudiesController.updateStudy); //update
studiesRoute.delete("/:id", StudiesController.deleteStudy); //delete
studiesRoute.get("/:id", StudiesController.getOneStudy); //getById

export default studiesRoute;
