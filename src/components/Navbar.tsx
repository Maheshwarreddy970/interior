"use client";

import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';

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
const navVariants = {
    open: {
        height: "100%",
        transition: { duration: 0.5, ease: 'easeInOut', type: 'just', stiffness: 50 }
    },
    close: {
        height: "auto",
        transition: { duration: 0.5, ease: 'easeInOut', type: 'just', stiffness: 50 }
    },
    visible: {
        width: "100%"
    },
    resize: {
        width: "auto"
    }
};

// NavigationBar component
export default function NavigationBar() {
    const { scrollY } = useScroll();
    const [isResized, setIsResized] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Update resize state based on scroll position
    useMotionValueEvent(scrollY, "change", (latest: number) => {
        setIsResized(latest > 250);
    });

    return (
        <motion.nav
            initial={{ y: -20,opacity:0 }}
            animate={{ y: 0,opacity:1 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className='z-50 w-full top-0  min-w-full mx-auto fixed start-0 flex justify-center items-center'>
            <motion.div
                animate={[isResized ? "resize" : "visible", isMenuOpen ? "open" : "close"]}
                initial={false}
                transition={{ duration: 0.4, ease: 'easeInOut', type: 'spring', stiffness: 30 }}
                variants={navVariants}
                className={cn('w-full bg-white py-2', isResized && "mt-3 border shadow-md rounded-3xl", isMenuOpen && "w-full")}
            >
                <div className='w-full px-4 md:px-8 flex justify-between items-center gap-44 sm:gap-24'>
                    <a href='/' className='flex gap-2 items-center'>
                        <img src="/logo.png" className="w-[5.7rem] h-11 font-semibold" alt="Logo" />
                    </a>
                    <div className="hidden md:flex items-center gap-4 text-base font-medium">
                        {navigationItems.map((item, index) => (
                            <a className='opacity-85 hover:opacity-100 font-normal hover:scale-105 transition-all duration-200 ease-in-out hover:-translate-y-1 active:translate-y-0 active:scale-90' key={index} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
                </div>
                {isMenuOpen && (
                    <div className="flex my-16 bg-black/10 dark:bg-white/10 rounded-xl mx-4 flex-col px-5 py-7 gap-5 text-lg font-medium">
                        {navigationItems.map((item, index) => (
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'easeInOut', duration: 0.3, delay: index * 0.2, stiffness: 50, type: 'spring' }}
                                className='py-2 rounded-xl border border-black/20 px-4 flex items-center dark:border-white/15 hover:-translate-y-2 ease-in-out duration-150 hover:bg-black hover:text-white shadow dark:hover:bg-white dark:hover:text-black bg-white dark:bg-black'
                                key={index}
                                href={item.href}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                )}
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
            className={cn("md:hidden group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")}
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