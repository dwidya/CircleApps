import * as Joi from 'joi';

export const createReplySchema = Joi.object({
    thread_id: Joi.number(),
    user_id: Joi.number(),
    content: Joi.string(),
    image: Joi.string().allow(""),
})

export const updateReplySchema = Joi.object({
    content: Joi.string(),
    image: Joi.string().allow(""),
})