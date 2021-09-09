import mongoose from 'mongoose';

// Voici les caractéristiques d'un produit en POO
const productSchema = new mongoose.Schema({
    name:{type: String, required: true, unique: true},
    image:{type: String, required: true},
    brand:{type: String, required: true},
    category:{type: String, required: true},
    description:{type: String, required: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},

},
{
    timestamps: true,
}
);
// Le priemier paramétre s'est le nom du model en base de donnée
const Product = mongoose.model('Product', productSchema);

export default Product;