import { validationResult } from 'express-validator';

const validator = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        const formattedErrors = {};

        errors.array().forEach(error => {
            formattedErrors[error.path] = error.msg;
        });

        return res.status(400).json({
            message: 'Erro de validação',
            errors: formattedErrors
        });
    }

    next();
};

export default validator;