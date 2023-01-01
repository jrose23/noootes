import CrossIconDark from '../assets/cross-icon-dark.svg';

function Header({ logo, addNote, noteData }) {
    return (
        <div className="header">
            <p className="logo">{logo}</p>
            <div className="header-data">
                <p className="note-count">
                    {noteData.length} {noteData.length === 1 ? 'Note' : 'Notes'}
                </p>
                <button className="add-note-btn" onClick={addNote}>
                    <img src={CrossIconDark} className="add-note-btn--icon" />
                </button>
            </div>
        </div>
    );
}

export default Header;
