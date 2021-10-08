const fs = require('fs');
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes();
    console.log(notes);
    return notes;
}
const loadNotes = () => {
   try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
   }catch(err){
       //console.log("Err msg:", err.message);
       return [];
   }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', notesJSON);
}

const addNote = (title, body) => {

    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        console.log(notes);
        saveNotes(notes);
    } else{
        console.log('Title already exists')
    }
    // fs.writeFileSync('notes.json', newNote);

}

const removeNote = (title) => {
    const notes = loadNotes();    

    if(notes.length === 0){
        console.log('No notes is available...Add some to delete them');
    } 
    else{
        const notesToKeep = notes.filter(note => note.title !== title);
        
        if(notes.length > notesToKeep.length){
            console.log(chalk.green.inverse('Note Removed'));
            saveNotes(notesToKeep);
        } else{
            console.log(chalk.red.inverse('No Note found'));
        }
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};