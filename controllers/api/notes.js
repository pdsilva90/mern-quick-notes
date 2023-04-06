const Note = require('../../models/note');

module.exports = {
  create,
  allNotes,
  deleteNote
}

async function create(req, res) {
  req.body.user = req.user;
  const note = await Note.create(req.body);
  console.log(note);
  res.json(note);
}

async function allNotes(req, res) {
  const notes = await Note.find({user: req.user._id});
  res.json(notes);
}

async function deleteNote(req, res) {
  await Note.findByIdAndDelete(req.params.id);
  const notes = await Note.find({user: req.user._id});
  res.json(notes);
}