import { Request, Response } from "express";
import { ExperienceService } from "../services/experience.service";
import { CreateExperienceDto } from "../dto/experience.dto";

const experienceService = new ExperienceService()

export class ExperienceController {

    public async createExperience(req: Request, res: Response): Promise<void> {
        try {
            const createExperienceDto: CreateExperienceDto = req.body
            const experience = await experienceService.create(createExperienceDto)
            res.status(201).json(experience)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getAllExperiences(req: Request, res: Response): Promise<void> {
        try {
            const experiences = await experienceService.getAll()
            res.status(201).json(experiences)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getExperienceById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const experience = await experienceService.getById(id)
            if (!experience) {
                res.status(404).json({ message: 'Experience not found' })
            }
            res.status(200).json(experience)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async updateExperience(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const updatedData: Partial<CreateExperienceDto> = req.body
            const experienceUpdated = await experienceService.update(id, updatedData)
            if (!experienceUpdated) {
                res.status(404).json({ message: 'Experience not found' })
            }
            res.status(200).json(experienceUpdated)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async deleteExperience(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            await experienceService.delete(id)
            res.status(204).json({ message: 'Experience deleted' })
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }
}
