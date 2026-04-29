"use client";

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

export default function Contact() {
  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex overflow-hidden">
      <Sidebar width="w-[425px]" />
      <div className="flex-1 flex flex-col pt-[24px] pl-[24px] pr-[24px] h-screen overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row gap-[24px] w-full max-w-[967px]"
        >
          <div className="w-[373px]">
            <h1 className="text-[24px] leading-[1.2] font-['Helvetica'] text-[#2f2c29]">
              Let&apos;s talk about your next interior and architecture project.
            </h1>
          </div>

          <div className="w-[570px] flex flex-col gap-[20px] font-['Helvetica'] text-[16px] leading-[1.5] text-[#2f2c29]/80 pt-2">
            <p>
              Reach us directly to discuss your needs and timeline. We&apos;ll help shape your ideas into a space with clear character and lasting experience.
            </p>
            <p className="text-[#2f2c29]">
              Phone: +62 123 456 789
            </p>
            <p className="text-[#2f2c29]">
              Address: Jakarta, Indonesia
            </p>
            <motion.a
              href="https://wa.me/62123456789"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="w-fit bg-[#2f2c29] text-white text-[12px] tracking-[3px] px-[24px] py-[14px]"
            >
              CHAT ON WHATSAPP
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
