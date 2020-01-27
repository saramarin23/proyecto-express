const express = require('express');

const songControllers = require('../controllers/songs');

const router = express.Router();

router.get('/', songControllers.getAllSongs);
router.post('/create', songControllers.createSongs);
router.delete('/:id', songControllers.deleteSongs);

module.exports = router;
