"use client";

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

const imgVariant1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80";
const imgVariant2 = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80";
const imgVariant3 = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80";
const imgVariant4 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";
const imgVariant5 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80";

const projects = [
  { id: "01", slug: "green-cove", title: "Kitchen Interior", img: imgVariant1 },
  { id: "02", slug: "sienna-grove", title: "Mr. A Bedroom Interior", img: imgVariant2 },
  { id: "03", slug: "villa-serenity", title: "Villa Serenity", img: imgVariant3 },
  { id: "04", slug: "midnight-haven", title: "Midnight Haven", img: imgVariant4 },
  { id: "05", slug: "solace-villa", title: "Solace Villa", img: imgVariant5 },
];

export default function Works() {
  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex font-['Inter',sans-serif]">
      <Sidebar width="w-[425px]" />

      {/* Projects List */}
      <div className="flex-1 p-6">
        <div className="max-w-[967px] mx-auto flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.a
              href={`/works/${project.slug}`}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-2 group cursor-pointer"
            >
              <div className="relative w-full overflow-hidden bg-gray-200" style={{ aspectRatio: "3/4" }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex justify-between items-start pt-2 font-bold text-[#2f2c29] text-[13px]">
                <span>{project.id}</span>
                <span>{project.title}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
