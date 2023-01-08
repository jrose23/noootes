import { motion } from 'framer-motion';
import NoteFella from '../assets/Note-Fella.svg';

function Message({ addNote, messageText, buttonText }) {
    return (
        <motion.div
            className="message"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 15
            }}
        >
            <img className="message-img" src={NoteFella} />
            <h1>{messageText}</h1>
            <button className="message-btn" onClick={addNote}>
                {buttonText}
            </button>
        </motion.div>
    );
}

export default Message;
