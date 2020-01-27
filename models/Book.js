const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: { type: String, required: true, minLength: '2' },
    year: Number,
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id; //Formateamos para que nos quite la "_"
        delete ret.__v; //Que no nos devuelva esto como respuesta
        return ret;
      },
    },
  }
);
//Lo que requiere y cómo lo va a devolver

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
