"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const imgLogo = "/assets/logo.png";
const imgWhatsApp = "/assets/navBarIcon-whatsapp.svg";
const imgLinkedIn = "/assets/navBarIcon-linkedin.svg";
const imgInstagram = "/assets/navBarIcon-instagram.svg";

const imgHamburger = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232f2c29' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='8' x2='20' y2='8'/%3E%3Cline x1='4' y1='16' x2='20' y2='16'/%3E%3C/svg%3E";
const imgClose = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E";

const navItems = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <>
      {/* Top bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex h-[56px] items-center justify-between px-6 transition-colors duration-300 ${open ? "bg-black" : "bg-[#f0f4f8]"}`}>
        <Link href="/" onClick={close}>
          <img src={imgLogo} alt="The Brickfast Club" className={`h-[34px] w-auto object-contain transition-all duration-300 ${open ? "brightness-0 invert" : ""}`} />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center"
        >
          <img src={open ? imgClose : imgHamburger} alt="" className="h-6 w-6" />
        </button>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 bg-black w-full h-full"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={`font-['Helvetica'] text-3xl font-medium tracking-widest text-white transition-opacity ${isActive ? "opacity-50 cursor-default" : "hover:opacity-50"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex gap-6 pt-4">
              <a href="#" onClick={close} className="h-6 w-6">
                <img src={imgWhatsApp} alt="WhatsApp" className="h-full w-full brightness-0 invert" />
              </a>
              <a href="#" onClick={close} className="h-6 w-6">
                <img src={imgLinkedIn} alt="LinkedIn" className="h-full w-full brightness-0 invert" />
              </a>
              <a href="#" onClick={close} className="h-6 w-6">
                <img src={imgInstagram} alt="Instagram" className="h-full w-full brightness-0 invert" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
