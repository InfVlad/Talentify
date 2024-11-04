import { Request, Response } from 'express';
import { ApplicationService } from '../services/application.service';
import { CreateApplicationDto } from '../dto/application.dto';

const applicationService = new ApplicationService();

export class ApplicationController {
    // Create a new application
    public async createApplication(req: Request, res: Response): Promise<void> {
        try {
            const createApplicationDto: CreateApplicationDto = req.body;
            const application = await applicationService.create(createApplicationDto);
            res.status(201).json(application);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get all applications
    public async getAllApplications(req: Request, res: Response): Promise<void> {
        try {
            const applications = await applicationService.getAll();
            res.status(200).json(applications);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get a specific application by ID
    public async getApplicationById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const application = await applicationService.getById(id);
            if (!application) {
                res.status(404).json({ message: 'Application not found' });
                return;
            }
            res.status(200).json(application);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Update an application by ID
    public async updateApplication(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const updateApplicationDto: Partial<CreateApplicationDto> = req.body;
            const applicationUpdated = await applicationService.update(id, updateApplicationDto);
            res.status(200).json(applicationUpdated);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete an application by ID
    public async deleteApplication(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await applicationService.delete(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}
