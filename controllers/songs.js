const Song = require('../models/Song');

const debug = require('debug')('upgrade-media:songs-controller');

const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find(); //Sin el await peta
    return res.status(200).json(songs);
  } catch (err) {
    return next(err);
  }
};

const createSongs = async (req, res, next) => {
  try {
    const { title, author, year } = req.body; //Destructuring para asegurarme de que cojo lo que hace falta
    const newSong = new Song({ title, author, year });
    await newSong.validate(); //Si da un error falla aquí en vez de en la creación
    debug('Song was validated');
    const createdSong = await newSong.save();
    return res.status(200).json(createdSong);
  } catch (err) {
    return next(err);
  }
};

const deleteSongs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSong = await Song.findByIdAndDelete(id);
    return res.status(200).json(deletedSong);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllSongs,
  createSongs,
  deleteSongs,
};
