import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';
import { CreateProfileDto } from '../dto/profile.dto';

const profileService = new ProfileService();

export class ProfileController {

    // Create a new Profile
    public async createProfile(req: Request, res: Response): Promise<void> {
        try {
            const createProfileDto: CreateProfileDto = req.body;
            const profile = await profileService.create(createProfileDto);
            res.status(201).json(profile);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get all Profiles
    public async getAllProfiles(req: Request, res: Response): Promise<void> {
        try {
            const profiles = await profileService.getAll();
            res.status(200).json(profiles);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get Profile by ID
    public async getProfileById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const profile = await profileService.getById(id);
            if (!profile) {
                res.status(404).json({ message: 'Profile not found' });
            } else {
                res.status(200).json(profile);
            }
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Update a Profile
    public async updateProfile(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const updateData: Partial<CreateProfileDto> = req.body;
            const profileUpdated = await profileService.update(id, updateData);
            res.status(200).json(profileUpdated);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete a Profile
    public async deleteProfile(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await profileService.delete(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

}
