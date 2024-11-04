import { Router } from "express";
import { FavoriteController } from '../controllers/favorite.controller';
import { isAuth } from "../helpers/authenticate.helper";

const favoriteController = new FavoriteController()

const router = Router()

router.post('/', isAuth, (req, res) => favoriteController.createFavorite(req, res))

router.get('/', isAuth, (req, res) => favoriteController.getAllFavorites(req, res))

router.get('/:id', isAuth, (req, res) => favoriteController.getFavoriteById(req, res))

router.put('/:id', isAuth, (req, res) => favoriteController.updateFavorite(req, res))

router.delete('/:id', isAuth, (req, res) => favoriteController.deleteFavorite(req, res))

router.delete('/', isAuth, (req, res) => favoriteController.deleteAllFavorites(req, res))

export default router
