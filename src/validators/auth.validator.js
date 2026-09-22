import { body } from 'express-validator';
import validator from './validator.js';

class AuthValidator {

    static signInValidator = [
        body('email')
            .notEmpty()
            .isEmail()
            .withMessage('Email inválido'),

        body('password')
            .notEmpty()
            .isLength({ min: 8 })
            .withMessage('A senha deve possuir pelo menos 8 caracteres'),

        validator
    ]


    static signUpValidator = [
        body('fullName')
            .notEmpty()
            .isLength({ min: 8 })
            .withMessage('O nome deve possuir pelo menos 8 caracteres'),

        body('email')
            .notEmpty()
            .isEmail()
            .withMessage('E-mail inválido'),

        body('password')
            .notEmpty()
            .isLength({ min: 8 })
            .withMessage('A senha deve possuir pelo menos 8 caracteres'),

        validator
    ]
}

export default AuthValidator