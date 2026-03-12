import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`py-16 md:py-24 ${className}`}
  >
    {children}
  </motion.section>
);

export default Section;
