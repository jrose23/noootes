import { useState, useRef } from 'react';
import Alert from './Alert';
import TextareaAutosize from 'react-textarea-autosize';
import CrossIconLight from '../assets/cross-icon-light.svg';
import CopyIcon from '../assets/copy-icon.svg';

function Note({ id, content, created, numChars, maxChars, updateNote, deleteNote }) {
    const [showCharAlert, setShowCharAlert] = useState(false);
    const [showCopyAlert, setShowCopyAlert] = useState(false);
    const [showEmptyAlert, setShowEmptyAlert] = useState(false);

    const noteRef = useRef();

    function copyNote() {
        if (content.length > 0) {
            noteRef.current.select();
            navigator.clipboard.writeText(noteRef.current.value);
            setShowCopyAlert(true);
        } else {
            setShowEmptyAlert(true);
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
                onKeyPress={numChars === maxChars ? () => setShowCharAlert(true) : undefined}
            />

            {showCharAlert && (
                <Alert
                    id={id}
                    message={`Sorry, only ${maxChars} characters allowed...`}
                    setShowCharAlert={setShowCharAlert}
                    setShowCopyAlert={setShowCopyAlert}
                    setShowEmptyAlert={setShowEmptyAlert}
                />
            )}

            {showCopyAlert && (
                <Alert
                    id={id}
                    message={'Note copied to clipboard!'}
                    setShowCharAlert={setShowCharAlert}
                    setShowCopyAlert={setShowCopyAlert}
                    setShowEmptyAlert={setShowEmptyAlert}
                />
            )}

            {showEmptyAlert && (
                <Alert
                    id={id}
                    message={'Oops! No text to copy...'}
                    setShowCharAlert={setShowCharAlert}
                    setShowCopyAlert={setShowCopyAlert}
                    setShowEmptyAlert={setShowEmptyAlert}
                />
            )}

            <div className="note-info">
                <p>{created}</p>
                <p>
                    {numChars} / {maxChars}
                </p>
                <div className="note-control">
                    <button className="note-control-btn" onClick={() => copyNote()}>
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
