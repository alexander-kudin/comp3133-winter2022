import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
    {
        address:{
            building: { type: String },
            street: { type: String },
            zipcode: { type: String },
        },
        city: { type: String },
        cuisine: { type: String },
        name: { type: String },
        restaurant_id: { type: Number }
    },
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;