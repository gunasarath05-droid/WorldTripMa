"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 -mt-6 ${
        scrolled
          ? "bg-primary shadow-md py-4 h-[12%]"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/images/WT_Logo_without_BG.png"
              alt="World Trip"
              width={200}
              height={65}
              className=" h-24 md:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-accent ${
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent">
                  Live 24/7
                </span>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="text-sm font-medium text-white hover:text-accent transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phone1}
              </a>
            </div>
            <Button
              size="sm"
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-6"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary z-40 lg:hidden flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold font-heading ${
                      pathname === link.href ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-4"
            >
              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 bg-white text-primary hover:bg-gray-100 shadow-md hover:shadow-lg focus:ring-white px-8 py-3.5 text-lg w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <Button
                variant="outline"
                className="w-full justify-center border-white text-white hover:bg-white/10 hover:text-white"
                size="lg"
                href="/contact"
              >
                Enquire Online
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
