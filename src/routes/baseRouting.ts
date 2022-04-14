import express, { Express, Request, Response, Router} from 'express';
export const productRouter: Router = express.Router();

export abstract class BaseRouting {
     router: Router;
    
    //Getting a list of...
    getStuff(){
        this.router.get('/', (req: Request, res: Response)=> {
            res.send('estoy en productos');
            })
    }

    getOneStuff(){
        this.router.get('/:stuffId', (req: Request, res: Response)=> {
            const {stuffId} = req.params
            res.send(`mi param es: ${stuffId}`);
            })
    }

    postStuff(){
        this.router.post('/', (req: Request, res: Response)=> {
            const {body} = req.body
            res.json(body);
            })
    }
}

interface testo {
    //Getting a list of...
    getStuff()
        // this.router.get('/', (req: Request, res: Response)=> {
        //     res.send('estoy en productos');
        //     })
    }

    // getOneStuff(){
    //     this.router.get('/:stuffId', (req: Request, res: Response)=> {
    //         const {stuffId} = req.params
    //         res.send(`mi param es: ${stuffId}`);
    //         })
    // }

    // postStuff(){
    //     this.router.post('/', (req: Request, res: Response)=> {
    //         const {body} = req.body
    //         res.json(body);
    //         })


export class test implements testo{
    getStuff() {
        throw new Error('Method not implemented.');
    }
    
}