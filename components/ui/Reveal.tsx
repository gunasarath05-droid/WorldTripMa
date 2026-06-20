'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    className?: string;
}

export const Reveal = ({ children, width = '100%', delay = 0.2, className }: RevealProps) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
