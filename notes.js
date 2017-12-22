const fs = require('fs');

//this function will return the note as an object
var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) =>
{
	//console.log('Adding note', title, body);
	var notes = fetchNotes();
	var note = {
		title,
		body
	};



var duplicateNotes = notes.filter((note) => {
	return note.title===title;
});

if(duplicateNotes.length === 0)
{
	notes.push(note);
	saveNotes(notes);
	return note;
}
else
{
	console.log('Note already present');
}

	
};

var getAll = () =>
{
	return fetchNotes();
};

var getNote = (title) =>
{
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) =>
		{
			return note.title === title;
		});
	return filteredNotes[0];
}

var removeNote = (title) =>
{
	//fetch notes
	var notes = fetchNotes();
	//filter notes, removing the one with title of argument
	var filteredNotes = notes.filter((note) => note.title!==title);
	//save new notes array
	saveNotes(filteredNotes);
	//returns true if a note could be removed..else return false
	return notes.length !== filteredNotes.length;
};

var logNote = (note) =>
{
	console.log('--');
	console.log('Title: '+note.title);
	console.log('Body: '+note.body);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};