import CreateStudiesDto from "../dto/studies.dto";
import StudiesService from "../services/studies.service";
import { Request, Response, NextFunction } from "express";

class StudiesController {
  static async createStudies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createStudiesDto: CreateStudiesDto = req.body;

      const studie = await StudiesService.create(createStudiesDto);
      res.status(201).json({ data: studie });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
  static async getAllStudies(req: Request, res: Response) {
    try {
      const studies = await StudiesService.getAll();
      res.status(200).json({ data: studies });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getOneStudy(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const study = await StudiesService.getById(id);

      if (!study) {
        res.status(404).json({ message: "Study not found" });
      } else {
        res.status(200).json({ data: study });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteStudy(req: Request, res: Response, next: NextFunction) {
    try {
      //delete y update ver tema res. adonde entran? o al 200 o al catch (errorHandler futuro?)
      const id = parseInt(req.params.id);

      const study = await StudiesService.delete(id);

      if (!study) {
        res.status(404).json({ message: "Study not found" });
      }
      res.status(200).json({ message: "Study deleted", data: study });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateStudy(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const study = await StudiesService.update(id, req.body);

      if (!study) {
        res.status(404).json({ message: "Study not found" });
      }
      res.status(200).json({ message: "Study updated", data: study });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default StudiesController;
