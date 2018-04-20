console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesStrings = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesStrings);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting All notes');
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title === title);
  return filteredNote[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  filteredNotes = notes.filter((node) => node.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('---');
  console.log('Title:', note.title);
  console.log('Body:', note.body);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
