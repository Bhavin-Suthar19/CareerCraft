// src/components/AnimatedPage.jsx
import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100vw", opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: "-100vw", opacity: 0 },
};

const slideTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={slideTransition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
