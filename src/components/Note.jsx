import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Alert from './Alert';
import TextareaAutosize from 'react-textarea-autosize';
import CrossIconLight from '../assets/cross-icon-light.svg';
import CopyIcon from '../assets/copy-icon.svg';

function Note({ id, content, created, numChars, maxChars, updateNote, deleteNote }) {
    const [showAlert, setShowAlert] = useState(false);

    function checkChars(e) {
        const { keyCode } = e;

        // Don't show alert if backspace key is pressed (keycode 8)
        if (numChars === maxChars && keyCode !== 8) {
            setShowAlert(true);
        } else undefined;
    }

    return (
        <div className="note">
            <TextareaAutosize
                className="note-content"
                maxLength={maxChars}
                placeholder="Enter a note..."
                value={content}
                onChange={e => updateNote(e, id, maxChars)}
                onKeyDown={e => checkChars(e)}
            />
            <AnimatePresence>
                {showAlert && (
                    <Alert
                        id={id}
                        message={`Sorry, only ${maxChars} characters allowed...`}
                        setShowAlert={setShowAlert}
                    />
                )}
            </AnimatePresence>
            <div className="note-info">
                <p>{created}</p>
                <p>
                    {numChars} / {maxChars}
                </p>
                <div className="note-control">
                    <button
                        className="note-control-btn"
                        onClick={() => console.log('copy button clicked')}
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
