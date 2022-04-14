import express,{Express, Router} from 'express';
import {productRouter} from '../routes/productsRouting';
import {categoryRouter} from '../routes/categoriesRouting';
import {userRouter} from '../routes/usersRouting';

export function routerApi(app: Express){
    const router: Router = express.Router();
    app.use('/ts/v1', router);
    router.use('/products', productRouter);
    router.use('/categories', categoryRouter);
    router.use('/users', userRouter)
}