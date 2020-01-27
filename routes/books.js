const express = require('express');

const bookControllers = require('../controllers/books');

const router = express.Router();

// http://localhost:3000/books
router.get('/', bookControllers.getAllBooks);

// http://localhost:3000/books/3254236
router.get('/:id', bookControllers.getById);

// http://localhost:3000/books/create
router.post('/create', bookControllers.createBook);

module.exports = router;
