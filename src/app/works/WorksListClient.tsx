"use client";

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

type Project = {
  key: string;
  order: number;
  slug: string;
  title: string;
  img: string;
};

export default function WorksListClient({ projects }: { projects: Project[] }) {
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
