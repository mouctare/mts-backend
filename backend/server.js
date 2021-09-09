import express from "express";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

/* // La route pour afficher les data dans le navigateur
/* app.get('/api/products', (req, res) =>{
    res.send(data.products);
}); */

// La route pour afficher les data dans le navigateur
/* app.get('/api/products/:id', (req, res) =>{
    const product = data.products.find((x ) => x._id === req.params.id);
    if(product){
    res.send(product)
    } else {
        res.status(404).send({message: 'Product not found'});
    }

}); */ 

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get('/', (req, res) => {
    res.send('Serve is ready');
});

// ce midelware permet de cther des errs coté front
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})
