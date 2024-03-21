const express = require('express');
const notesRouter = express.Router();
const Note = require('../models/note');

// Create a new note
notesRouter.post('/', async (req, res) => {
  req.body.user = req.auth._id
  try {
    const { title, content } = req.body;
    // Associate the note with the logged-in user
    const newNote = new Note({ title, content, user: req.auth._id });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all notes belonging to the logged-in user
notesRouter.get('/', async (req, res) => {
  try {
    // Filter notes based on the logged-in user's ID
    const notes = await Note.find({ user: req.auth._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single note belonging to the logged-in user
notesRouter.get('/:id', async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.auth._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a note belonging to the logged-in user
notesRouter.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findOneAndUpdate({ _id: req.params.id, user: req.auth._id }, { title, content }, { new: true });
    if (!updatedNote) return res.status(404).json({ message: 'Note not found' });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a note belonging to the logged-in user
notesRouter.delete('/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ _id: req.params.id, user: req.auth._id });
    if (!deletedNote) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = notesRouter;
