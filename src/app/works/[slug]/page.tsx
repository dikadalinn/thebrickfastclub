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
    <main className="bg-[#f0f4f8] min-h-screen w-full flex flex-col">
      {/* Top bar: back button + location */}
      <div className="flex items-center justify-between bg-[#f0f4f8] p-6">
        <Link href="/works" className="flex items-center gap-3 group">
          <img src={imgSiCloseDuotone} alt="Back" className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-['Helvetica'] text-sm text-[#2f2c29]">BACK</span>
        </Link>
        <span className="font-['Helvetica'] text-sm text-[#2f2c29]">{project.location}</span>
      </div>

      {/* Project info */}
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="px-6 pb-6 flex flex-col gap-3"
      >
        <h1 className="font-['Helvetica'] text-[20px] font-bold tracking-[-0.8px] text-[#2f2c29]">
          {project.title}
        </h1>
        <p className="font-[var(--font-martian-mono)] text-[13px] font-bold tracking-[14px] text-[#2f2c29]">
          {project.year}
        </p>
        <p className="font-['Helvetica'] text-[16px] leading-6 text-[#2f2c29]">
          {project.description}
        </p>
      </motion.div>

      {/* Image with navigation overlay */}
      <div className="relative flex-1 min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${project.slug}-${imageIndex}`}
            src={project.images[imageIndex]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Image navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8">
          <button onClick={goPrevImage} className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow" aria-label="Previous image">
            <img src={imgPrev} alt="" className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </button>
          <button onClick={goNextImage} className="group flex h-10 w-10 items-center justify-center bg-white/80 backdrop-blur rounded-full shadow" aria-label="Next image">
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
