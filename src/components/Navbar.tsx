"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Texthover from './ui/texthover';

// Define the structure for navigation items
interface NavigationItem {
    name: string;
    href: string;
}

// List of navigation items
const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];
// Variants for the navigation bar animation


// NavigationBar component
export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, ease: 'easeIn' }}
            className='z-50 top-0 w-full  mx-auto fixed flex justify-center items-center'>
            <motion.div
                className={cn('w-full bg-[#FFFAF1] py-2')}
            >
                <div className='w-full px-4 bg-[#FFFAF1] md:px-11 flex justify-between items-center gap-44 sm:gap-24'>
                    <a href='/' className='flex gap-2 items-center'>
                        <img src="/logo.png" className="w-[5.7rem] h-11 font-semibold" alt="Logo" />
                    </a>
                    <div className="hidden md:flex items-center gap-4 text-base font-medium">
                        {navigationItems.map((item, index) => (
                            <Texthover text={item.name} className='opacity-85  hover:opacity-100 font-normal hover:scale-105 transition-all duration-200 ease-in-out hover:-translate-y-1 active:translate-y-0 active:scale-90' key={index} href={item.href}>
                            </Texthover>
                        ))}
                    </div>
                    <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.8, ease: 'easeIn', type: 'spring', stiffness: 40 }}
                            className="flex md:hidden h-screen fixed px-16 bg-[#FFFAF1]   py-28 w-full  overflow-hidden  rounded-xl flex-col  gap-10 text-lg font-medium">
                            {navigationItems.map((item, index) => (
                                <motion.a
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "100%", opacity: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.2, stiffness: 100, type: 'spring' }}
                                    className=' text-4xl text-start '
                                    key={index}

                                >
                                    <Texthover text={item.name} href={item.href}>

                                    </Texthover>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.nav>
    );
}

// MenuToggle component for the hamburger menu
interface MenuToggleProps {
    isMenuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuToggle({ isMenuOpen, setMenuOpen }: MenuToggleProps) {
    return (
        <button
            className={cn("md:hidden group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black")}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7]" : "")} y="2" x="7" width="9" height="1.5" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="1.5" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="1.5" rx="1"></rect>
            </svg>
        </button>
    );
}