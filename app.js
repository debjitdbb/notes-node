const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
		describe: "Title of note",
		demand: true,
		alias: 't'
	};
	const bodyOptions = {
		describe: 'Body of note',
		demand: true,
		alias: 'b'
	};

	
const argv = yargs
.command('add', 'Add a new note',{
	title: titleOptions,
	body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
	title: titleOptions
})
.command('remove', 'Remove an existing note', {
	title: titleOptions
})
.help()
.argv;
var command = argv._[0];


if(command === 'add')
{
	// console.log('Adding new node');
	var note = notes.addNote(argv.title, argv.body);
	if(note)
	{
		console.log('Node created');
		notes.logNote(note);
	}
}
else if(command === 'list')
{
	var allNotes = notes.getAll();
	if(allNotes.length === 0)
	{
		console.log('No note found');
	}
	else if(allNotes.length === 1)
	{
		console.log('Printing '+allNotes.length+' note');
		allNotes.forEach((note) => notes.logNote(note));
	}
	else
	{
		console.log('Printing '+allNotes.length+' note(s)');
		allNotes.forEach((note) => notes.logNote(note));
	}
	
}
else if(command === 'read')
{
	var note = notes.getNote(argv.title);
	if(note)
	{
		console.log('Note found');
		notes.logNote(note);
	}
	else
	{
		console.log('Note not found');
	}
}
else if(command === 'remove')
{
	//console.log('Removing note');
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
}
else
{
	console.log('Command not recognised....Please enter a valid command. Type "node app.js --help" for help');
}