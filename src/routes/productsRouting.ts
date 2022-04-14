import express, { Express, Request, Response, Router } from 'express';
import {ProductService} from '../services/productsService';

export const productRouter: Router = express.Router();
const service = new ProductService();


//Getting a list of products
productRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.send('estoy en lista productos');
        const rta = await service.getProducts();
        res.json(rta);
    } catch (error) {
        console.log(error);
        
    }
})
//Getting a product
productRouter.get('/:productId', (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        res.send(`estoy en un enredo ${productId}`);
    } catch (error) {
        console.log(error);
        
    }
})
//Posting a new product
productRouter.get('/', (req: Request, res: Response) => {
    try {
        res.send('casita products :3');
    } catch (error) {
        console.log(error);
    }
})
//Deleting a product
productRouter.delete(':productId', (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        res.send(`borrando producto: ${productId}`);
    } catch (error) {
        console.log(error);
    }
})
//Updating a category
productRouter.patch(':productId', (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const body = req.body;
        res.send(`borrando producto: ${productId}`);
    } catch (error) {
        console.log(error);
    }
})