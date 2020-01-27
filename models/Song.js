const mongoose = require('mongoose');

const { Schema } = mongoose;

const SongSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, min: 0, max: new Date().getFullYear() },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);
// ret de return

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
