import express, { Express, Request, Response, Router} from 'express';
export const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response)=> {
    res.send('inicial de users')
})

userRouter.get('/deriuser', (req: Request, res: Response)=> {
    res.send('derivacion de users')
})