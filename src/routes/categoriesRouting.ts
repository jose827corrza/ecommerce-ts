import express, { Express, Request, Response, Router} from 'express';
export const categoryRouter: Router = express.Router();
//Getting a list of categories
categoryRouter.get('/cat', (req: Request, res: Response)=> {
    res.send('saltamos a categories');
})
//Getting a category
categoryRouter.get('/', (req: Request, res: Response)=> {
    res.send('inicial de categories');
})
//Posting a new category

//Deleting a category

//Updating a category