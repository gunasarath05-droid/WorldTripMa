'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-all group"
            title="Chat with us on WhatsApp"
        >
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
                Available 24/7 &bull; Always Online
            </div>
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="sr-only">WhatsApp</span>

            {/* Notification pulse effect to draw attention */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        </motion.a>
    );
}
