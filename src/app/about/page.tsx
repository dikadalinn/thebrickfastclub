"use client";

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

const imgVariant1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80";
const imgVariant2 = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80";

export default function About() {
  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex overflow-hidden">
      <Sidebar width="w-[425px]" />
      <div className="flex-1 flex flex-col pt-[24px] pl-[24px] relative h-screen overflow-y-auto">
        
        {/* Top Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row gap-[24px] w-full max-w-[967px] mb-[24px]"
        >
          {/* Heading */}
          <div className="w-[373px]">
            <h1 className="text-[24px] leading-[1.2] font-['Helvetica'] text-[#2f2c29]">
              Interior design and architecture studio based in Jakarta, Indonesia founded by Gifari Putranto
            </h1>
          </div>
          
          {/* Description */}
          <div className="w-[570px] flex flex-col gap-[12px] font-['Helvetica'] text-[16px] leading-[1.5] text-[#2f2c29]/80 pt-2">
            <p>
              We are an interior design and architecture studio that believes that space is not just a place to live—it's a stage for a story. At The Brickfast Club, we design with a cinematic approach: every corner, lighting, and texture is designed like a frame in a film.
            </p>
            <p>
              We work with a minimalist approach, daring to explore character, and always seeking surprises in simple things. Each of our projects is not just finished, but lived—because we believe: good design is not just aesthetics, but a lasting experience.
            </p>
            <p>
              Welcome to The Brickfast Club. Where design meets storytelling.
            </p>
          </div>
        </motion.div>

        {/* Photos Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ml-[117px] flex flex-row gap-[24px] pb-[40px]"
        >
          <div className="w-[412px] h-[754px] bg-black/5 rounded-[4px] overflow-hidden shrink-0">
             <img src={imgVariant1} alt="About 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-[412px] h-[754px] bg-black/5 rounded-[4px] overflow-hidden shrink-0">
             <img src={imgVariant2} alt="About 2" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
