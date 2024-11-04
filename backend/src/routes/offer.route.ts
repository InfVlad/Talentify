import { Router } from "express";
import { OfferController } from "../controllers/offer.controller";
import { isAuth } from "../helpers/authenticate.helper";

const offerController = new OfferController()

const router = Router()

router.post('/', isAuth, (req, res) => offerController.createOffer(req, res))

router.get('/', isAuth, (req, res) => offerController.getAllOffers(req, res))

router.get('/filtered', isAuth, (req, res) => offerController.getFilteredOffers(req, res))

router.get('/:id', isAuth, (req, res) => offerController.getOfferById(req, res))

router.put('/:id', isAuth, (req, res) => offerController.updateOffer(req, res))

router.delete('/:id', isAuth, (req, res) => offerController.deleteOffer(req, res))

export default router
