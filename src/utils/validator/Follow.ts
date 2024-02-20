import * as Joi from 'joi';

export const followingSchema = Joi.object({
    user: Joi.number(),
});

export const followerSchema = Joi.object({
    following_id: Joi.number(),
    follower_id: Joi.number(),
});

export const unfollowSchema = Joi.object({
    following_id: Joi.number(),
    follower_id: Joi.number(),
})