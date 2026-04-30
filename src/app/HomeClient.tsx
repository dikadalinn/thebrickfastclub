"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

const imgLucideArrowRight = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function HomeClient({ works }: { works: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);
  const currentProject = works[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverSide(x < rect.width / 2 ? 'left' : 'right');
  };

  const handleHeroClick = () => {
    if (hoverSide === 'left') {
      goToPrev();
      return;
    }
    if (hoverSide === 'right') {
      goToNext();
    }
  };

  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex overflow-hidden">
      <Sidebar />
      <div
        className="relative flex-1 h-screen overflow-hidden bg-[#d9d9d9] cursor-pointer"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={() => setHoverSide(null)}
        onClick={handleHeroClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.image}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent opacity-30 to-black" />

        <AnimatePresence>
          {hoverSide && (
            <motion.div
              key={hoverSide}
              initial={{ opacity: 0, x: hoverSide === 'left' ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: hoverSide === 'left' ? -10 : 10 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-1/2 -translate-y-1/2 z-20 ${hoverSide === 'left' ? 'left-10' : 'right-10'}`}
            >
              <div className="w-14 h-14 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <img
                  src={imgLucideArrowRight}
                  alt=""
                  className={`w-7 h-7 brightness-0 invert ${hoverSide === 'left' ? 'rotate-180' : ''}`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-[120px] left-6 right-6 lg:bottom-[200px] lg:left-[69px] lg:right-auto max-w-[639px] text-white z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.slug}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-2xl mb-4 font-['Helvetica']">{currentProject.title}</p>
              <p className="text-base leading-relaxed font-['Helvetica']">{currentProject.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <Link
          href={`/works/${currentProject.slug}`}
          className="absolute bottom-[60px] left-6 lg:bottom-[104px] lg:left-[69px] z-20 flex items-center gap-4 group"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-8 h-8 rounded-full border border-white/35 flex items-center justify-center transition-all">
            <img
              src={imgLucideArrowRight}
              alt=""
              className="w-6 h-6 brightness-0 invert"
            />
          </div>
          <span className="text-xl text-white font-['Helvetica'] group-hover:translate-x-2 transition-transform">
            View project
          </span>
        </Link>

        <div className="absolute right-6 bottom-[60px] lg:right-12 lg:bottom-[104px] z-20">
          <div className="relative h-8 w-8">
            <svg className="h-8 w-8 -rotate-90" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <motion.circle
                key={currentIndex}
                cx="16"
                cy="16"
                r="13"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={81.68}
                initial={{ strokeDashoffset: 81.68 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, ease: 'linear' }}
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
