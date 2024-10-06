"use client"

import Preloader from '@/components/preloader/index';
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";


interface DocsLayoutProps {
    children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (
        async () => {
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0, 0);
          }, 1000)
        }
      )()
    }, [])
    return (
        <main>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            {children}
        </main>
    );
}