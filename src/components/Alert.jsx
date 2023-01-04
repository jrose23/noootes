import { motion } from 'framer-motion';

function Alert({ alertMessage, setShowAlert }) {
    setTimeout(() => {
        setShowAlert(false);
    }, 2000);

    return (
        <motion.div
            className="alert-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -52, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 15
            }}
        >
            <div className="alert">
                <p>{alertMessage}</p>
            </div>
        </motion.div>
    );
}

export default Alert;
