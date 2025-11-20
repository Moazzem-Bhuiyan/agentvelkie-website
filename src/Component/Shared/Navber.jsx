'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimateTextOnHover from './AnimateTextOnHover/AnimateTextOnHover';
import logo from '@/assets/image/logo.png';
import Image from 'next/image';

// Links
const LINKS = [
  {
    key: 'home',
    label: 'HOME',
    route: '/',
  },
  {
    key: 'service',
    label: 'SERVICE',
    route: '/service',
  },
  {
    key: 'admin',
    label: 'ADMIN',
    route: '/admin',
  },
  {
    key: 'super',
    label: 'SUPER',
    route: '/super',
  },
  {
    key: 'master',
    label: 'MASTER',
    route: '/master',
  },
];

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="!mb-10  flex items-center justify-center  w-full top-0 z-50 !mx-auto bg-[#536cad]">
      {/* Desktop Version */}
      <div className=" h-[100px]   hidden items-center justify-between gap-x-10 lg:w-[65%] !mx-auto  px-10  lg:flex  w-full !2xl:w-full">
        {/* Left ----- Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="mx-auto  " width={200} height={200} />
        </Link>

        {/* Center ------ Links */}
        <div className="flex flex-grow items-center justify-center gap-x-10">
          {LINKS.map((link) => (
            <Link key={link.key} href={link.route} className="font-medium !text-white text-sm">
              <AnimateTextOnHover path={link.route}>{link.label}</AnimateTextOnHover>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full fixed top-0 left-0 bg-[#ffbd30] !z-50">
        <div className="flex items-center justify-between !p-4 bg-[#ffbd30]">
          <Link href="/">
            <Image src={logo} alt="Logo" className="mx-auto" width={60} height={60} />
          </Link>
          <motion.div
            className="text-white"
            initial={{ rotate: 0 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'bounce', stiffness: 300 }}
            className="bg-black/90 text-white w-full absolute top-16 left-0 flex flex-col items-center !py-4"
          >
            {LINKS.map((link) => (
              <Link
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                key={link.key}
                href={link.route}
                className="font-medium text-lg !py-2"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
