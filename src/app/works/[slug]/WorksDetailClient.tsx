"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import type { Work } from "@/lib/sanity/types";

const imgSiCloseDuotone = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E";
const imgPrev = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12H5M12 19l-7-7 7-7'/%3E%3C/svg%3E";
const imgNext = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E";

export default function WorksDetailClient({
  work,
  nextProject,
}: {
  work: Work;
  nextProject: Work;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const goPrevImage = () =>
    setImageIndex((i) => (i - 1 + work.galleryImages.length) % work.galleryImages.length);
  const goNextImage = () =>
    setImageIndex((i) => (i + 1) % work.galleryImages.length);

  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex flex-col">
      {/* Top bar: back button + location */}
      <div className="flex items-center justify-between bg-[#f0f4f8] p-6">
        <Link href="/works" className="flex items-center gap-3 group">
          <img src={imgSiCloseDuotone} alt="Back" className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-['Helvetica'] text-sm text-[#2f2c29]">BACK</span>
        </Link>
        <span className="font-['Helvetica'] text-sm text-[#2f2c29]">{work.location}</span>
      </div>

      {/* Project info */}
      <motion.div
        key={work.slug}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="px-6 pb-6 flex flex-col gap-3"
      >
        <h1 className="font-['Helvetica'] text-[20px] font-bold tracking-[-0.8px] text-[#2f2c29]">
          {work.title}
        </h1>
        <p className="font-[var(--font-martian-mono)] text-[13px] font-bold tracking-[14px] text-[#2f2c29]">
          {work.year}
        </p>
        <p className="font-['Helvetica'] text-[16px] leading-6 text-[#2f2c29]">
          {work.description}
        </p>
      </motion.div>

      {/* Image with navigation overlay */}
      <div className="relative flex-1 min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${work.slug}-${imageIndex}`}
            src={work.galleryImages[imageIndex]}
            alt={work.title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Image navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8">
          <button
            onClick={goPrevImage}
            className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow"
            aria-label="Previous image"
          >
            <img src={imgPrev} alt="" className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </button>
          <button
            onClick={goNextImage}
            className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow"
            aria-label="Next image"
          >
            <img src={imgNext} alt="" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Next project CTA */}
      <Link
        href={`/works/${nextProject.slug}`}
        className="flex items-center justify-center bg-[#f0f4f8] py-5 hover:bg-[#e0e4e8] transition-colors"
      >
        <p className="font-['Helvetica'] text-[12px] tracking-[4.32px] text-black">
          NEXT PROJECT
        </p>
      </Link>
    </main>
  );
}
