'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const DESTINATIONS = [
    {
        name: 'Dubai',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Bali',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076&auto=format&fit=crop',
    },
    {
        name: 'Maldives',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Switzerland',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Thailand',
        img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2078&auto=format&fit=crop',
    },
    {
        name: 'London',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Paris',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    },
    {
        name: 'New York',
        img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
    },
];

export function DestinationScroller() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(checkScroll, 500);
        }
    };

    return (
        <div className="relative group">
            {/* Navigation Buttons */}
            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-slate-100 transition-all hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none md:-left-6 hidden md:block ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6 text-primary" />
            </button>

            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-slate-100 transition-all hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none md:-right-6 hidden md:block ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Scroller Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {DESTINATIONS.map((dest, idx) => (
                    <div
                        key={idx}
                        className="flex-none w-[280px] md:w-[350px] snap-start"
                    >
                        <Reveal delay={idx * 0.05}>
                            <div className="group/card relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl border border-white/5">
                                <Image
                                    src={dest.img}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover/card:scale-105"
                                    sizes="(max-width: 768px) 280px, 350px"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white text-xl md:text-3xl font-black font-heading tracking-widest uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-500 scale-100 group-hover/card:scale-110 text-center px-4">
                                        {dest.name}
                                    </h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    );
}
