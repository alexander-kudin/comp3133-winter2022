import Restaurant from '../models/Restaurant.js';

export const getRestaurants = async (req, res) => {
    try {
        const { sortBy } = req.query;
        let restaurants = null;

        if (sortBy && sortBy.toLowerCase() === 'asc'){
            restaurants = await Restaurant.find({})
            .select("id cuisine name city restaurant_id")
            .sort({ restaurant_id: 'asc' })
            .exec();
        }else if (sortBy && sortBy.toLowerCase() === 'desc'){
            restaurants = await Restaurant.find({})
            .select("id cuisine name city restaurant_id")
            .sort({ restaurant_id: 'desc' })
            .exec();
        }else{
            restaurants = await Restaurant.find();
        }

        if (!restaurants || restaurants.length  == 0) { return res.status(404).send('No restaurant records found'); }

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getRestaurantsByCuisine = async (req, res) => {
    try {
        const { cuisineName } = req.params;
        let restaurants = null;

        if (cuisineName.toLowerCase() === 'delicatessen') {
            restaurants = await Restaurant.find({ 
                cuisine: cuisineName,
                city: { $ne: 'Brooklyn' }
            }, { _id: 0, address: 0, restaurant_id: 0, __v: 0 })
            .sort({ name: 'asc' })
            .exec();
        }else{
            restaurants = await Restaurant.find({ cuisine: cuisineName });
        }

        if (!restaurants || restaurants.length  == 0) { return res.status(404).send('No restaurant records found'); }

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
} 