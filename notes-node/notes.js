const fs = require('fs');

let fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }
    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNote(filteredNotes);

    return notes.length !== filteredNotes.length;
}


let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
}
let getAll = () => {
    return fetchNotes();
}

let logNote = (note) => {
    debugger;
    console.log('__')
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
