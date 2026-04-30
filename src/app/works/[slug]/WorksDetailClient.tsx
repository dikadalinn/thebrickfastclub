"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import type { Work } from "@/lib/sanity/types";

const imgLogo = "/assets/logo.png";
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
    <main className="bg-[#f0f4f8] min-h-screen w-full flex flex-col lg:flex-row">
      {/* ── LEFT INFO PANEL ─────────────────────────────────────────────── */}
      {/* Mobile: top bar with back + location; Desktop: fixed left sidebar */}
      <div className="flex items-center justify-between bg-[#f0f4f8] p-6 lg:hidden">
        <Link href="/works" className="flex items-center gap-3 group">
          <img
            src={imgSiCloseDuotone}
            alt="Back"
            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
          />
          <span className="font-['Helvetica'] text-sm text-[#2f2c29]">BACK</span>
        </Link>
        <span className="font-['Helvetica'] text-sm text-[#2f2c29]">{work.location}</span>
      </div>

      <section className="hidden lg:flex h-screen w-[425px] shrink-0 flex-col justify-between bg-[#f0f4f8] p-[60px]">
        <Link href="/" className="relative block h-[118px] w-[197px]">
          <img src={imgLogo} alt="The Brickfast Club" className="h-full w-full object-contain" />
        </Link>

        <motion.div
          key={work.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex w-full flex-col items-start gap-[25px]"
        >
          {/* Title & Location */}
          <div className="flex w-full flex-col items-start gap-[5px] overflow-hidden">
            <h1 className="font-['Helvetica'] text-[20px] font-bold leading-[24px] tracking-[-0.8px] text-[#2f2c29] whitespace-nowrap">
              {work.title}
            </h1>
            <p className="font-['Helvetica'] text-[16px] font-normal leading-[18px] text-[#2f2c29] whitespace-nowrap">
              {work.location}
            </p>
          </div>

          {/* Year */}
          <div>
            <p className="font-[var(--font-martian-mono)] text-[14px] font-bold leading-[28px] tracking-[14px] text-[#2f2c29]">
              {work.year}
            </p>
          </div>

          {/* Description */}
          <p className="w-full whitespace-pre-wrap font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#2f2c29]">
            {work.description}
          </p>
        </motion.div>

        {/* Image prev/next navigation */}
        <div className="flex items-center gap-[25px]">
          <button
            onClick={goPrevImage}
            className="group flex h-[25px] w-[25px] items-center justify-center"
            aria-label="Previous image"
          >
            <img
              src={imgPrev}
              alt=""
              className="h-[25px] w-[25px] transition-transform duration-200 group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={goNextImage}
            className="group flex h-[25px] w-[25px] items-center justify-center"
            aria-label="Next image"
          >
            <img
              src={imgNext}
              alt=""
              className="h-[25px] w-[25px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>

      {/* ── RIGHT IMAGE PANEL ───────────────────────────────────────────── */}
      {/* Mobile: stacked below info; Desktop: fills remaining width */}
      <section className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden bg-[#d9d9d9]">
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

        {/* Mobile: centred prev/next overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 lg:hidden">
          <button
            onClick={goPrevImage}
            className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow"
            aria-label="Previous image"
          >
            <img
              src={imgPrev}
              alt=""
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={goNextImage}
            className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow"
            aria-label="Next image"
          >
            <img
              src={imgNext}
              alt=""
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Desktop: NEXT PROJECT + close button */}
        <div className="hidden lg:block">
          <Link
            href={`/works/${nextProject.slug}`}
            className="absolute bottom-[32px] right-[32px] z-10 flex items-center bg-[#f0f4f8] px-[24px] py-[16px] hover:bg-[#e0e4e8] transition-colors"
          >
            <p className="font-['Helvetica'] text-[12px] font-normal leading-normal tracking-[4.32px] text-black whitespace-nowrap">
              NEXT PROJECT
            </p>
          </Link>

          <Link
            href="/works"
            className="group absolute right-[27px] top-[27px] z-10 flex h-[48px] w-[48.686px] items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-black"
          >
            <img
              src={imgSiCloseDuotone}
              alt="Close"
              className="h-[35.624px] w-[35.624px] transition-all duration-200 group-hover:brightness-0 group-hover:invert"
            />
          </Link>
        </div>
      </section>

      {/* ── MOBILE: stacked project info below image ────────────────────── */}
      <div className="lg:hidden">
        <motion.div
          key={`${work.slug}-info`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="px-6 pt-6 pb-6 flex flex-col gap-3"
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

        <Link
          href={`/works/${nextProject.slug}`}
          className="flex items-center justify-center bg-[#f0f4f8] py-5 hover:bg-[#e0e4e8] transition-colors"
        >
          <p className="font-['Helvetica'] text-[12px] tracking-[4.32px] text-black">
            NEXT PROJECT
          </p>
        </Link>
      </div>
    </main>
  );
}
