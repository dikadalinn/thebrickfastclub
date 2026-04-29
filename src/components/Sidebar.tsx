"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const imgLogo = "/assets/logo.png";
const imgGroup = "/assets/navBarIcon-whatsapp.svg";
const imgMdiLinkedin = "/assets/navBarIcon-linkedin.svg";
const imgMdiInstagram = "/assets/navBarIcon-instagram.svg";

const navItems = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

type SidebarProps = {
  width?: string;
};

function NavItem({ item, pathname }: { item: { label: string; href: string }, pathname: string }) {
  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

  return (
    <Link 
      href={item.href}
      className="flex w-full items-center py-[8px] relative group"
    >
      <div 
        className="w-2 h-2 rounded-full bg-[#2f2c29] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ marginRight: 6, opacity: isActive ? 1 : undefined }}
      />
      <motion.span 
        className="font-['Helvetica'] font-medium text-[16px] text-[#2f2c29] leading-[19.2px] whitespace-nowrap"
        whileHover={{ x: 6 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {item.label}
      </motion.span>
    </Link>
  );
}

export default function Sidebar({ width = "w-[347px]" }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${width} h-screen sticky top-0 flex flex-col justify-between p-[60px] z-20 bg-[#f0f4f8] border-r border-black/10`}
    >
      <Link href="/" className="w-[197px] h-[118px] relative block">
        <img src={imgLogo} alt="The Brickfast Club" className="w-full h-full object-contain" />
      </Link>

      <div className="flex flex-col items-start w-full">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} pathname={pathname} />
        ))}
      </div>

      <div className="flex gap-[13px] items-center">
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-6 h-6">
          <img src={imgGroup} alt="WhatsApp" className="w-full h-full" />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-6 h-6">
          <img src={imgMdiLinkedin} alt="LinkedIn" className="w-full h-full" />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-6 h-6">
          <img src={imgMdiInstagram} alt="Instagram" className="w-full h-full" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
