import express, { Express, NextFunction, Request, Response, Router} from 'express';
export const categoryRouter: Router = express.Router();
import {CategoryService} from '../services/categoriesService';
import {CreateCategory, UpdateCategory} from '../models/categoryModel';
import {validatorHandler, Property} from '../middlewares/validator';
import {createCategorySchema,updateCategorySchema, getCategorySchema} from '../schemas/categorySchema';
import boom from'@hapi/boom';

const service = new CategoryService();
//Getting categories
categoryRouter.get('/', async(req: Request, res: Response, next: NextFunction)=> {
    try {
        const rta = await service.getCategories();
        res.json(rta);
    } catch (error) {
        next(error);
        
    }
})

//Create a category
categoryRouter.post('/',validatorHandler(createCategorySchema, Property.BODY), async(req: Request, res: Response, next: NextFunction) =>{
    try {
        const body = req.body as CreateCategory;
        const rta = await service.createCategory(body);
        res.status(201).json(rta);
    } catch (error) {
        next(error);
        
    }
})
//Getting a category
categoryRouter.get('/:categoryId',validatorHandler(getCategorySchema, Property.PARAMS), async(req: Request, res: Response, next: NextFunction)=> {
    try {
        const {categoryId} = req.params;
        const id = parseInt(categoryId, 10);
        const rta = await service.getCategory(id);
        res.json(rta);
    } catch (error) {
        next(error);
        
    }
})

//Updating a category
categoryRouter.patch('/:categoryId', validatorHandler(updateCategorySchema, Property.BODY), async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params;
        const body = req.body as UpdateCategory;
        const id = parseInt(categoryId, 10);
        const rta = await service.updateCategory(id, body);
        res.json(rta);
    } catch (error) {
        next(error);
    }
})