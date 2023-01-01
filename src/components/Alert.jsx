import { motion, AnimatePresence } from 'framer-motion';

function Alert({ maxChars, id, setShowAlert }) {
    setTimeout(() => {
        setShowAlert(false);
    }, 2000);

    return (
        <AnimatePresence>
            <motion.div
                className="alert-container"
                key={id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: -52, opacity: 1 }}
                transition={{
                    type: 'spring',
                    damping: 15
                }}
            >
                <div className="alert">
                    <p>Sorry, only {maxChars} characters allowed...</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Alert;
