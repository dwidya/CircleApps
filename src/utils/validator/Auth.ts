import * as Joi from 'joi';

export const registerSchema = Joi.object ({
    full_name: Joi.string(),
    email: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
});

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});