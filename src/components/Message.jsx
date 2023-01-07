import { motion } from 'framer-motion';
import NoteFella from '../assets/Note-Fella.svg';

function Message() {
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
            <h1>Let's make some notes!</h1>
            <h3>Create one now</h3>
        </motion.div>
    );
}

export default Message;
