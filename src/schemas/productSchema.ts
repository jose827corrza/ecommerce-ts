import Joi from 'joi';
const title = Joi.string().min(4).max(40)
const image = Joi.array().items(Joi.string())

export const createProductSchema = Joi.object({
    title: title.required(),
    price: Joi.number().positive(),
    description: Joi.string(),
    categoryId: Joi.number().integer().positive(),
    image: image

});