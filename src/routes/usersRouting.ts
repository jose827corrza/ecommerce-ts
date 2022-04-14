import express, { Express, Request, Response, Router} from 'express';
export const userRouter: Router = express.Router();

//Getting users
userRouter.get('/', (req: Request, res: Response)=> {
    res.send('inicial de users')
})
//Getting user
userRouter.get('/:userId', (req: Request, res: Response)=> {
    try {
        const {userId} = req.params;
        res.send(`es el usuario ${userId}`)
    } catch (error) {
        console.log(error);
        
    }
})
//Delete an user
userRouter.delete(':userId', (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        res.send(`borrando producto: ${userId}`);
    } catch (error) {
        console.log(error);
    }
})
//Updating an user
userRouter.patch(':pruserIdoductId', (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const body = req.body;
        res.send(`borrando producto: ${userId}`);
    } catch (error) {
        console.log(error);
    }
})