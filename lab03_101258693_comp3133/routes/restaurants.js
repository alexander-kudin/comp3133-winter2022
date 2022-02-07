import express from 'express';

import { getRestaurants, getRestaurantsByCuisine } from '../controllers/restaurants.js'

const router = express.Router();

router.get('/', getRestaurants);
router.get('/cuisine/:cuisineName', getRestaurantsByCuisine);

export default router;