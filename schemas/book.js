const yup = require('yup');

const bookSchema = yup.object().shape({
    title: yup.string().min(1).max(255).trim().required(),
    author: yup.string().min(1).max(255).trim().required(),
    description: yup.string().min(1).max(255).trim().required(),
    image: yup.string().url().trim().required()
});

module.exports = bookSchema;