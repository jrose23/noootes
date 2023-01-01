import CrossIconDark from '../assets/cross-icon-dark.svg';

function Header({ logo, addNote, notes }) {
    return (
        <div className="header">
            <p className="logo">{logo}</p>
            <div className="header-data">
                <p className="note-count">
                    {notes.length} {notes.length === 1 ? 'Note' : 'Notes'}
                </p>
                <button className="add-note-btn" onClick={addNote}>
                    <img src={CrossIconDark} className="add-note-btn--icon" />
                </button>
            </div>
        </div>
    );
}

export default Header;
