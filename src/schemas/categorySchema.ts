import Joi from 'joi';
const name = Joi.string().min(4).max(40)
const image = Joi.array().items(Joi.string())
export const createCategorySchema = Joi.object({
    name: name.required(),
    image: image
});

