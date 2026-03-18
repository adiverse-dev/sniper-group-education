import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;