import Note from './Note';

function NotesGrid({ notes, updateNote, deleteNote }) {
    return (
        <div className="notes-grid">
            {notes.map(note => {
                return (
                    <Note
                        key={note.id}
                        id={note.id}
                        content={note.content}
                        created={note.created}
                        numChars={note.numChars}
                        maxChars={250}
                        updateNote={updateNote}
                        deleteNote={deleteNote}
                    />
                );
            })}
        </div>
    );
}

export default NotesGrid;
