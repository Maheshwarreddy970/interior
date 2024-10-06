"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Page route changed to:", pathname);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 2.5,
          ease:'easeInOut',
          
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(49% 0, 49% 0, 50% 100%, 50% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(49% 0, 49% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
