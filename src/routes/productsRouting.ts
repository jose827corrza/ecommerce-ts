import express, { Express, Request, Response, Router} from 'express';
export const productRouter: Router = express.Router();
//Getting a list of products
productRouter.get('/test', (req: Request, res: Response)=> {
    res.send('estoy en productos');
})
//Getting a product
productRouter.get('/:productId', (req: Request, res: Response)=> {
    const {productId} = req.params;
    res.send(`estoy en un enredo ${productId}`);
})
//Posting a new product
productRouter.get('/', (req: Request, res: Response)=> {
    res.send('casita products :3');
})
//Deleting a product
productRouter.delete(':productId',(req: Request, res: Response)=> {
    const {productId} = req.params;
    res.send(`borrando producto: ${productId}`);
 })
//Updating a category
productRouter.patch(':productId',(req: Request, res: Response)=> {
    const {productId} = req.params;
    const body = req.body;
    res.send(`borrando producto: ${productId}`);
 })