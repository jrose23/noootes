import { motion, AnimatePresence } from 'framer-motion';

function Alert({ id, message, setShowCharAlert, setShowCopyAlert }) {
    setTimeout(() => {
        setShowCharAlert(false);
        setShowCopyAlert(false);
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
                    <p>{message}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Alert;
