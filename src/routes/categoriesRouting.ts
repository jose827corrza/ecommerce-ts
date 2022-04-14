import express, { Express, Request, Response, Router} from 'express';
export const categoryRouter: Router = express.Router();
import boom from'@hapi/boom';
//Getting categories
categoryRouter.get('/', (req: Request, res: Response)=> {
    res.send('inicial de users')
})
//Getting a category
categoryRouter.get('/:categoryId', (req: Request, res: Response)=> {
    try {
        const {categoryId} = req.params;
        res.send(`es la categorya ${categoryId}`)
    } catch (error) {
        console.log(error);
        
    }
})
//Delete a category
categoryRouter.delete(':categoryId', (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        res.send(`borrando producto: ${categoryId}`);
    } catch (error) {
        console.log(error);
    }
})
//Updating a category
categoryRouter.patch(':categoryId', (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const body = req.body;
        res.send(`borrando producto: ${categoryId}`);
    } catch (error) {
        console.log(error);
    }
})