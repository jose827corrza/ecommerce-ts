import express, { Express, Request, Response, Router } from 'express';
import {ProductService} from '../services/productsService';

export const productRouter: Router = express.Router();
const service = new ProductService();

productRouter.post('/create-db', async(req: Request, res: Response) =>{
    try {
        await service.createData();
        res.status(201).send('creado');
    } catch (error) {
        console.log(error);
        
    }
})
//Getting a list of products
productRouter.get('/', async (req: Request, res: Response) => {
    try {
        //res.send('estoy en lista productos');
        const rta = await service.getProducts();
        res.json(rta);
    } catch (error) {
        console.log(error);
        
    }
})
//Getting a product
productRouter.get('/:productId', async(req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const id = parseInt(productId, 10);
        const rta = await service.getProduct(id);
        if(typeof rta == 'undefined'){
            res.status(404).json({msg: "No existe ese producto"})
        }
        res.status(200).json(rta);
    } catch (error) {
        console.log(error);
        
    }
})
//Posting a new product
productRouter.post('/', async(req: Request, res: Response) => {
    try {
        const body = req.body;
        const rta = await service.createProduct(body);
        console.log(body);
        console.log("-----------");
        console.log(rta);
        
        res.status(201).json(rta);
    } catch (error) {
        console.log(error);
    }
})
//Deleting a product
productRouter.delete(':productId', async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const id = parseInt(productId, 10);
        const rta = await service.deleteProduct(id);
        res.status(200).json(rta);
    } catch (error) {
        console.log(error);
    }
})
//Updating a category
productRouter.patch(':productId', async(req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const id = parseInt(productId, 10);
        const body = req.body;
        const rta = await service.updateProduct(id, body);
        res.status(200).json(rta);
    } catch (error) {
        console.log(error);
    }
})