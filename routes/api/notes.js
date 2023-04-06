
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, notesCtrl.create);

router.get('/', ensureLoggedIn, notesCtrl.allNotes);

router.delete('/delete/:id', ensureLoggedIn, notesCtrl.deleteNote);

module.exports = router;