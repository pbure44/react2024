import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters min 1 max 20 characters'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'min price 0',
        'number.max':'max price 1 000 000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}