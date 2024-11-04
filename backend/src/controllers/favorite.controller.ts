import { Request, Response } from "express";
import { FavoriteService } from '../services/favorite.service'
import { CreateFavoriteDto } from "../dto/favorite.dto";

const favoriteService = new FavoriteService()

export class FavoriteController {

    public async createFavorite(req: Request, res: Response): Promise<void> {
        try {
            const createFavoriteDto: CreateFavoriteDto = req.body
            const favorite = await favoriteService.create(createFavoriteDto)
            res.status(201).json(favorite)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getAllFavorites(req: Request, res: Response): Promise<void> {
        try {
            const favorites = await favoriteService.getAll()
            res.status(200).json(favorites)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getFavoriteById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const favorite = await favoriteService.getById(id)
            res.status(200).json(favorite)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async updateFavorite(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const updateData: Partial<CreateFavoriteDto> = req.body
            const favoriteUpdated = await favoriteService.update(id, updateData)
            res.status(200).json(favoriteUpdated)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async deleteFavorite(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const favorite = await favoriteService.getById(id);

            if (!favorite) {
                res.status(404).json({ message: 'Favorite not found' });
            }

            await favoriteService.delete(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    public async deleteAllFavorites(req: Request, res: Response): Promise<void> {
        try {
            await favoriteService.deleteAll();
            res.status(200).json({ message: 'All favorites deleted successfully' })
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

}



