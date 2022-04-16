import Joi from 'joi';
const name = Joi.string().min(4).max(40)
const image = Joi.string()
export const createCategorySchema = Joi.object({
    name: name.required(),
    image: image
});

export const updateCategorySchema = Joi.object({
    name: name,
    image: image
});

export const getCategorySchema = Joi.object({
    categoryId: Joi.number().integer()//Joi.number().integer()
});

