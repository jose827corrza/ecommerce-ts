import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import {Boom, isBoom} from '@hapi/boom';

export function boomErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    console.log('es boom error');
    if(isBoom(err)){
        const {output} = err;
        return res.status(output.statusCode).json(output.payload);
    }
    next(err);
};

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    console.log('errorLog');
    
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
};