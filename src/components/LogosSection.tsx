import { motion } from "framer-motion";
import data from '@/../data/home.json'
import Image from "next/image";


const logos = data.home.brands;

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};



const LogoCarousel = () => (
    <div
        className="group relative mt-6  flex gap-6 overflow-hidden p-5"
        style={{
            maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
        }}
    >
        <motion.div
            animate={{ translateX: '-50%' }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="flex shrink-0 flex-row justify-around items-center gap-6 pr-6"
        >
         
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
            {logos.map((logo, i) => (
                <div key={i} className="h-32 w-40 flex justify-center items-center">
                    <Image
                        width={128}
                        height={160}
                        key={i}
                        src={logo.logo}
                        className="object-cover"
                        alt={logo.name}
                    />
                </div>
            ))}
        </motion.div>
    </div>
);

const LogoProof = () => (
    <section className="w-full py-12 overflow-hidden flex flex-col items-center">
        <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: 0.3 },
                },
            }}
        >
            <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="text-2xl sm:text-5xl font-bold text-center"
            >
                Associate Brands
            </motion.h1>
        </motion.div>
        <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, type: 'spring', stiffness: 150 }}
            className="mx-auto w-full overflow-hidden px-4 md:px-8 max-w-4xl"
        >
            <LogoCarousel />
        </motion.div>
    </section>
);

export default LogoProof;