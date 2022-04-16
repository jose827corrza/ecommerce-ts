import Joi from 'joi';
const title = Joi.string().min(4).max(40)
const image = Joi.array().items(Joi.string())

export const createProductSchema = Joi.object({
    title: title.required(),
    price: Joi.number().positive().required(),
    description: Joi.string().required(),
    category: Joi.number().integer().positive().required(),
    image: image

});

export const updateProductSchema = Joi.object({
    title: title,
    price: Joi.number().positive(),
    description: Joi.string(),
    category: Joi.number().integer().positive(),
    image: image
});

export const getProductSchema = Joi.object({
    id: Joi.number().integer()
});