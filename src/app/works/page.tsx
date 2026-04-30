"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAllWorks } from "@/lib/sanity/queries";
import { STATIC_WORKS } from "@/lib/data/works";
import Sidebar from '@/components/Sidebar';

export default function Works() {
  const [projects, setProjects] = useState<{ key: string; order: number; slug: string; title: string; img: string }[]>([]);

  useEffect(() => {
    async function load() {
      const sanityWorks = await getAllWorks();
      const p = sanityWorks.length > 0
        ? sanityWorks.map((w, i) => ({
            key: w._id,
            order: typeof w.order === 'number' ? w.order : i + 1,
            slug: w.slug,
            title: w.title,
            img: w.thumbnail ?? w.galleryImages[0] ?? "",
          }))
        : STATIC_WORKS.map((w, i) => ({
            key: `static-${i + 1}`,
            order: typeof w.order === 'number' ? w.order : i + 1,
            slug: w.slug,
            title: w.title,
            img: w.thumbnail ?? w.galleryImages[0] ?? "",
          }));

      setProjects(p);
    }
    load();
  }, []);

  if (projects.length === 0) {
    return (
      <main className="bg-[#f0f4f8] min-h-screen w-full flex font-['Inter',sans-serif]">
        <Sidebar width="w-[425px]" />
        <div className="flex-1 p-6 flex items-center justify-center">
          <p className="font-['Helvetica'] text-[#2f2c29]">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex font-['Inter',sans-serif]">
      <Sidebar width="w-[425px]" />

      {/* Projects List */}
      <div className="flex-1 p-6">
        <div className="max-w-[967px] mx-auto flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.a
              href={`/works/${project.slug}`}
              key={project.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-2 group cursor-pointer"
            >
              <div className="relative w-full overflow-hidden bg-gray-200" style={{ aspectRatio: "16/9" }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex justify-between items-start pt-2 font-bold text-[#2f2c29] text-[13px]">
                <span>{String(project.order).padStart(2, '0')}</span>
                <span>{project.title}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
