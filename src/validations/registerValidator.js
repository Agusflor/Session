const {check, body} = require('express-validator');
module.exports =[
    check('name')
        .isLength({min: 2}).withMessage('Debe ingresar como mínimo 2 letras').bail()
        .withMessage('El nombre debe contener solo letras'),
    check('tema')
        .notEmpty().withMessage('Debes seleccionar un tema'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Email inválido').bail(),
    check('edad')
        .notEmpty().withMessage('Campo requerido').bail()
        .isInt().isLength({min:10, max:100}).withMessage('Debe ser solo números'),

]