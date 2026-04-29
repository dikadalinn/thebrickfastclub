"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const imgLogo = "/assets/logo.png";
const imgSiCloseDuotone = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E";
const imgPrev = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12H5M12 19l-7-7 7-7'/%3E%3C/svg%3E";
const imgNext = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E";
const imgImage1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80";
const imgImage2 = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80";
const imgImage3 = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80";
const imgImage4 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";
const imgImage5 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80";

type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  images: string[];
};

const projects: Project[] = [
  {
    slug: 'green-cove',
    title: 'Kitchen Interior',
    location: 'Grand Wisata, Bekasi',
    year: '2022',
    description: 'Design secara keselurahan ingin konsep open space agar ruangan tidak terlihat sempit, di lain sisi konsep open space juga menjadi jembatan antar ruang yaitu dapur dan juga teras belakang.',
    images: [imgImage1, imgImage2, imgImage3],
  },
  {
    slug: 'sienna-grove',
    title: 'Mr. A Bedroom Interior',
    location: 'Jakarta Selatan',
    year: '2023',
    description: 'Sienna Grove menghadirkan suasana ruang tidur yang hangat dan tenang melalui permainan material alami, tone lembut, dan komposisi ruang yang bersih namun tetap nyaman untuk digunakan sehari-hari.',
    images: [imgImage2, imgImage3, imgImage4],
  },
  {
    slug: 'villa-serenity',
    title: 'Villa Serenity',
    location: 'Bandung, Jawa Barat',
    year: '2024',
    description: 'Villa Serenity dirancang untuk menghadirkan pengalaman tinggal yang tenang dan elegan, dengan fokus pada pencahayaan alami, keterbukaan ruang, serta hubungan yang kuat dengan lanskap sekitar.',
    images: [imgImage3, imgImage4, imgImage5],
  },
  {
    slug: 'midnight-haven',
    title: 'Midnight Haven',
    location: 'BSD, Tangerang',
    year: '2022',
    description: 'Midnight Haven menonjolkan karakter ruang yang modern dan refined, dengan perpaduan warna gelap, garis tegas, dan tata ruang yang efisien untuk kebutuhan hidup urban.',
    images: [imgImage4, imgImage5, imgImage1],
  },
  {
    slug: 'solace-villa',
    title: 'Solace Villa',
    location: 'Ubud, Bali',
    year: '2024',
    description: 'Solace Villa diciptakan sebagai tempat beristirahat yang intimate, memadukan arsitektur tropis modern dengan pengalaman ruang yang menenangkan dan menyatu dengan alam.',
    images: [imgImage5, imgImage1, imgImage2],
  },
];

export default function WorksDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentProjectIndex = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const project = projects[currentProjectIndex];
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  const [imageIndex, setImageIndex] = useState(0);

  const goPrevImage = () => setImageIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const goNextImage = () => setImageIndex((i) => (i + 1) % project.images.length);

  return (
    <main className="bg-[#f0f4f8] flex min-h-screen w-full">
      {/* Left Panel */}
      <section className="flex h-screen w-[425px] shrink-0 flex-col justify-between bg-[#f0f4f8] p-[60px]">
        <Link href="/works" className="relative block h-[118px] w-[197px]">
          <img src={imgLogo} alt="The Brickfast Club" className="h-full w-full object-contain" />
        </Link>

        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex w-full flex-col items-start gap-[25px]"
        >
          {/* Title & Location */}
          <div className="flex w-full flex-col items-start gap-[5px] overflow-hidden">
            <h1 className="font-['Helvetica'] text-[20px] font-bold leading-[24px] tracking-[-0.8px] text-[#2f2c29] whitespace-nowrap">
              {project.title}
            </h1>
            <p className="font-['Helvetica'] text-[16px] font-normal leading-[18px] text-[#2f2c29] whitespace-nowrap">
              {project.location}
            </p>
          </div>

          {/* Year */}
          <div className="min-w-[95.2px]">
            <p className="font-[var(--font-martian-mono)] text-[14px] font-bold leading-[28px] tracking-[14px] text-[#2f2c29]">
              {project.year}
            </p>
          </div>

          {/* Description */}
          <div className="w-full">
            <p className="w-full whitespace-pre-wrap font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#2f2c29]">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Image Navigation (prev/next image within project) */}
        <div className="flex items-center gap-[25px]">
          <button onClick={goPrevImage} className="group flex h-[25px] w-[25px] items-center justify-center">
            <img src={imgPrev} alt="Previous image" className="h-[25px] w-[25px] transition-transform duration-200 group-hover:-translate-x-1" />
          </button>
          <button onClick={goNextImage} className="group flex h-[25px] w-[25px] items-center justify-center">
            <img src={imgNext} alt="Next image" className="h-[25px] w-[25px] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Right Panel - Hero Image */}
      <section className="relative h-screen min-w-0 flex-1 overflow-hidden bg-[#d9d9d9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${project.slug}-${imageIndex}`}
            src={project.images[imageIndex]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* NEXT PROJECT — aligned to right */}
        <Link
          href={`/works/${nextProject.slug}`}
          className="absolute bottom-[32px] right-[32px] z-10 flex items-center bg-[#f0f4f8] px-[24px] py-[16px] hover:bg-[#e0e4e8] transition-colors"
        >
          <p className="font-['Helvetica'] text-[12px] font-normal leading-normal tracking-[4.32px] text-black whitespace-nowrap">
            NEXT PROJECT
          </p>
        </Link>

        {/* Close button — hover: black bg, white X */}
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
      </section>
    </main>
  );
}
