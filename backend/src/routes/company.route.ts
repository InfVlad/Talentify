import { Router } from "express";
import { CompanyController } from "../controllers/company.controller";
import { isAuth } from "../helpers/authenticate.helper";

const companyController = new CompanyController();

const router = Router();

router.post("/", isAuth, (req, res) => companyController.createCompany(req, res));
router.get("/", isAuth, (req, res) => companyController.getAllCompanies(req, res));
router.get("/:id", isAuth, (req, res) => companyController.getCompanyById(req, res));
router.put("/:id", isAuth, (req, res) => companyController.updateCompany(req, res));
router.delete("/:id", isAuth, (req, res) => companyController.deleteCompany(req, res));

export default router;
