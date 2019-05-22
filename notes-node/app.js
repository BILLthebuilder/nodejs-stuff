const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    
        describe:'Title of the note',
        demand: true,
        alias: 't'  
}
const bodyOptions = {
        describe: 'The body of the note',
        demand: true,
        alias: 'b'
}

const argv = yargs.
command('add', 'Add a new note',{
    title: titleOptions,
    body:bodyOptions,
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
    title: titleOptions
})
.command('remove', 'Remove a note',{
    title:titleOptions
})
.help()
.argv;

let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note has been created');
        notes.logNote(note);
    } else if (note === undefined) {
        console.log('note title already exists');
    }
}
else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
}
else if (command === 'read') {
    let readNote = notes.getNote(argv.title);
    if (readNote) {
        console.log('note has been read');
        notes.logNote(readNote);
    } else {
        console.log('note does not exist');
    }
    
}
else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed': 'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognized');
}
