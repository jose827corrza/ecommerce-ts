import express, {Express, Response, Request} from 'express';
import {routerApi} from './routes/index';
import {boomErrorHandler, errorHandler} from './middlewares/errorHandler';
const PORT = 3003

const app: Express = express();
app.use(express.json());
app.get('/', (req: Request, res: Response)=>{
    res.send('hola!')
})
routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
    
});