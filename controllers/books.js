const Book = require('../models/Book');

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    return next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    return next(err);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, year } = req.body;
    const newBook = new Book({ title, year: year });
    const createdBook = await newBook.save(); //Así guardo el libro, devuelve el objeto que hemos guardado en la BD
    return res.status(200).json(createdBook);
  } catch (err) {
    return next(err);
  }
};

module.exports = { createBook, getAllBooks, getById };

//Esto nos lo traemos de /routes/book.js para que quede más limpio
