import { useState, useRef } from 'react';
import Alert from './Alert';
import TextareaAutosize from 'react-textarea-autosize';
import CrossIconLight from '../assets/cross-icon-light.svg';
import CopyIcon from '../assets/copy-icon.svg';

function Note({ id, content, created, numChars, maxChars, updateNote, deleteNote }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const noteRef = useRef();

    function checkNoteChars() {
        if (numChars === maxChars) {
            setAlertMessage(`Sorry, only ${maxChars} characters allowed...`);
            setShowAlert(true);
        }
    }

    function copyNote() {
        const { value } = noteRef.current;

        if (value.length > 0) {
            noteRef.current.select();
            navigator.clipboard.writeText(value);
            setAlertMessage('Note copied to clipboard!');
            setShowAlert(true);
        }
    }

    return (
        <div className="note">
            <TextareaAutosize
                ref={noteRef}
                className="note-content"
                maxLength={maxChars}
                placeholder="Enter a note..."
                value={content}
                onChange={e => updateNote(e, id, maxChars)}
                onKeyPress={checkNoteChars}
            />

            {showAlert && <Alert alertMessage={alertMessage} setShowAlert={setShowAlert} />}

            <div className="note-info">
                <p>{created}</p>
                <p>
                    {numChars} / {maxChars}
                </p>
                <div className="note-control">
                    <button
                        className={
                            numChars === 0 ? 'note-control-btn disabled' : 'note-control-btn'
                        }
                        onClick={copyNote}
                    >
                        <img src={CopyIcon} className="note-control-btn--icon" />
                    </button>
                    <button className="note-control-btn" onClick={() => deleteNote(id)}>
                        <img src={CrossIconLight} className="note-control-btn--icon delete" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Note;
