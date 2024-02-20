import * as Joi from 'joi';

export const likeSchema = Joi.object({
    user_id: Joi.number(),
    thread_id: Joi.number(),
});