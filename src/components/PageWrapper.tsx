import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
    style={{ position: 'relative', zIndex: 0 }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
