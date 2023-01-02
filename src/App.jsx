import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import NotesGrid from './components/NotesGrid';
import Message from './components/Message';
import './App.css';

function App() {
    const [noteData, setNoteData] = useState(JSON.parse(localStorage.getItem('noootes')) || []);

    // Save notes to storage when notes added/changed
    useEffect(() => {
        localStorage.setItem('noootes', JSON.stringify(noteData));
    }, [noteData]);

    // Add a new Note
    function addNote() {
        const newNote = { id: getNoteId(), content: '', created: getNoteDate(), numChars: 0 };

        setNoteData(prevData => [newNote, ...prevData]);
    }

    // Update a Note
    function updateNote(e, noteID) {
        const { value } = e.target;

        const newNoteData = noteData.map(note => {
            if (note.id === noteID) {
                return { ...note, content: value, created: getNoteDate(), numChars: value.length };
            }

            return note;
        });

        setNoteData(newNoteData);
    }

    // Delete a Note
    function deleteNote(noteID) {
        const newNoteData = noteData.filter(note => note.id !== noteID);

        setNoteData(newNoteData);
    }

    // Generate random Note ID
    function getNoteId() {
        return crypto.randomUUID();
    }

    // Generate date for when Note created/updated
    function getNoteDate() {
        return new Date()
            .toLocaleString('en-us', {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
                hour: 'numeric',
                minute: '2-digit'
            })
            .replace(',', ' @');
    }

    return (
        <div className="App">
            <Header logo="Noootes." addNote={addNote} notes={noteData} />
            {noteData.length === 0 && <Message />}
            {noteData.length > 0 && (
                <NotesGrid notes={noteData} updateNote={updateNote} deleteNote={deleteNote} />
            )}
        </div>
    );
}

export default App;
