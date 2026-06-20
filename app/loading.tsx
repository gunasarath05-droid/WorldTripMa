'use client';

import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBFA]">
            <div className="relative flex items-center justify-center w-32 h-32">
                {/* Animated Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute w-28 h-28 rounded-full border-t-2 border-b-2 border-accent"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-20 h-20 rounded-full border-r-2 border-l-2 border-primary opacity-50"
                />

                {/* Center Icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex items-center justify-center"
                >
                    <Plane className="w-10 h-10 text-primary" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-2"
            >
                <h2 className="text-primary font-heading font-bold text-2xl tracking-[0.2em] uppercase">World Trip</h2>
                <div className="flex gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2.5 h-2.5 rounded-full bg-accent"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
