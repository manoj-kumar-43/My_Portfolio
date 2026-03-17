import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimatedSection = ({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={`py-20 px-4 ${className}`}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
