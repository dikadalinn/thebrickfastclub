"use client";

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

const imgArrowUpRight = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='7' y1='17' x2='17' y2='7'%3E%3C/line%3E%3Cpolyline points='7,7 17,7 17,17'%3E%3C/polyline%3E%3C/svg%3E";

export default function Contact() {
  return (
    <main className="bg-[#f0f4f8] min-h-screen w-full flex overflow-hidden">
      <Sidebar width="w-[425px]" />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Content Area with border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col flex-1"
        >
          {/* Top Section - Phone & Address */}
          <div className="flex flex-col gap-[5px] p-[60px] pb-0">
            <div className="flex flex-col gap-[12px] w-full">
              {/* Phone Number - Right aligned */}
              <div className="flex flex-col items-start lg:items-end">
                <a
                  href="tel:+6285219671345"
                  className="font-['Helvetica'] font-medium text-[14.6px] leading-[22.4px] text-[#2f2c29] whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  (+62) 852-1967-1345
                </a>
              </div>

              {/* Address - Right aligned */}
              <div className="flex flex-col items-start lg:items-end font-['Helvetica'] font-medium text-[#2f2c29] lg:text-right">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15.3px] leading-[22.4px] hover:opacity-70 transition-opacity"
                >
                  123 Modern Lane Jakarta City, ST
                </a>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15.1px] leading-[22.4px] hover:opacity-70 transition-opacity"
                >
                  12345 Country
                </a>
              </div>
            </div>

            {/* Instagram - Right aligned */}
            <div className="flex flex-col items-start lg:items-end mt-[12px]">
              <a
                href="https://www.instagram.com/brickfastclub/"
                target="_blank"
                rel="noreferrer"
                className="font-['Helvetica'] font-medium text-[15.4px] leading-[22.4px] text-[#2f2c29] uppercase whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Bottom Section - CTA & Heading */}
          <div className="flex flex-col justify-between flex-1 px-[60px] pb-[36px] pt-[36px]">
            {/* CTA Button */}
            <motion.a
              href="https://wa.me/6285219671345"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-[8px] px-[12px] py-[8px] w-fit group"
            >
              <span className="font-['Helvetica'] font-medium text-[20px] leading-[30px] text-[#2f2c29] whitespace-nowrap">
                SEND US A MESSAGE
              </span>
              <div className="relative w-[24px] h-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <img
                  src={imgArrowUpRight}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </motion.a>

            {/* CONTACT Heading - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-end"
            >
              <h1 className="font-['Helvetica'] font-medium text-[100px] leading-[120px] text-[#2f2c29] whitespace-nowrap">
                CONTACT
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
