import {Boom, badRequest} from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import {createProductSchema, updateProductSchema} from '../schemas/productSchema';
import Joi from 'joi';
const boom = new Boom();
export enum Property  {
    'QUERY' = 'query',
    'PARAMS' = 'params',
    'BODY' = 'body'
}

export function validatorHandler(schema: Joi.ObjectPropertiesSchema, property: Property){
    return (req: Request, res: Response, next: NextFunction) => {
        const data = req[property];
        console.log(data);
        console.log('---- ------ -------');
        
        const error = schema.validate(data, {abortEarly: false});
        console.log(error);
        
        if(error.error){
            next(badRequest('Revisa los datos ingresados'));
        }
        next();
    }
}