import React from "react";
import { motion } from "framer-motion";

export default function ConceptLayout() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-20 sm:p-8 font-serif text-gray-800">
      <div className="flex flex-col gap-20">
        <motion.div
          className="relative max-w-xl md:self-start"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">CRAFTSMANSHIP</h2>
          <p className="text-sm leading-relaxed">
            We believe that those who work with heart, mind and soul are true
            craftsmen; it is this sense of passion that we seek in our
            employees, suppliers and partners.
          </p>
          <motion.div
            initial={{ height: "1rem" }}
            whileInView={{ height: "8rem" }}
            transition={{ duration: 0.5, delay: 0.7, ease: "linear" }}
            className="absolute -top-0 -left-2 w-[1px] h-48 bg-gray-800 "
          ></motion.div>
          {/* <motion.div
            initial={{ top: "50px" }}
            whileInView={{
              top: "80px",
              transition: { duration: 0.5, delay: 0.5, ease: "linear" },
            }}
            className=" md:block absolute w-48 h-[1px] top-20 -left-12 bg-gray-800 rotate-90"
          ></motion.div> */}
          {/* <motion.div
            style={{
              position: "absolute",
              top: "11rem",
              left: "44px",
            }}
            initial={{ top: "8rem" }}
            whileInView={{
              top: "11rem",
              transition: { duration: 0.5, delay: 0.5, ease: "linear" },
            }}
            className=" md:block absolute w-2 h-2  bg-gray-800 rotate-45"
          ></motion.div> */}
        </motion.div>

        <motion.div
          className="relative md:-top-20 max-w-xl md:self-end text-left md:text-right"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">CURATION</h2>
          <p className="text-sm leading-relaxed">
            Our dedication to the future enables us to identify new methods of
            production, innovative materials, progressive techniques and talent
            that results in statement, space-defining pieces.
          </p>
          <motion.div
            initial={{ height: "1rem" }}
            whileInView={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "linear" }}
            className="absolute top-0 -right-2 w-[1px] h-48 bg-gray-800 "
          ></motion.div>
          {/* <motion.div
            style={{
              position: "absolute",
              top: "-80px",
              right: "44px",
            }}
            initial={{ top: "-50px" }}
            whileInView={{
              top: "-80px",
              transition: { duration: 0.5, delay: 0.6, ease: "linear" },
            }}
            className=" md:block w-2 h-2 bg-gray-800 rotate-45"
          ></motion.div> */}
          {/* <motion.div
            initial={{ top: "44px" }}
            whileInView={{
              top: "24px",
              transition: { duration: 0.5, delay: 0.6, ease: "linear" },
            }}
            className=" md:block absolute w-48 h-[1px] top-6 -right-12 bg-gray-800 rotate-90"
          ></motion.div> */}
        </motion.div>

        <motion.div
          className="relative  max-w-xl md:self-start"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">COMMUNITY</h2>
          <p className="text-sm leading-relaxed">
            Friendly, warm and open...that is how we are with everyone, from
            clients to partners to suppliers.
          </p>
          <motion.div
            initial={{ height: "1rem" }}
            whileInView={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "linear" }}
            className="absolute top-0 -left-2 w-[1px] h-48 bg-gray-800 "
          ></motion.div>
          {/* <motion.div
            initial={{ top: "120px" }}
            whileInView={{
              top: "80px",
              transition: { duration: 0.5, delay: 0.7, ease: "linear" },
            }}
            className="hidden md:block absolute w-48 h-[1px] top-20 left-4 bg-gray-800 rotate-90"
          ></motion.div>
          <motion.div
            style={{
              top: "-24px",
              left: "108px",
            }}
            initial={{ top: "20px" }}
            whileInView={{
              top: "-24px",
              transition: { duration: 0.5, delay: 0.7, ease: "linear" },
            }}
            className="hidden md:block absolute w-2 h-2 bg-gray-800 rotate-45"
          ></motion.div> */}
        </motion.div>

        <motion.div
          className="relative max-w-xl md:-top-20 md:self-end text-left md:text-right"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">CREATIVITY</h2>
          <p className="text-sm leading-relaxed">
            We challenge the status quo not with &apos;out-of-the-box&apos;
            thinking, but by doing away with the box completely - allowing our
            creativity to thrive and flourish.
          </p>
          <motion.div
            initial={{ height: "1rem" }}
            whileInView={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "linear" }}
            className="absolute top-0 -right-2 w-[1px] h-48 bg-gray-800 "
          ></motion.div>
          {/* <motion.div
            initial={{ top: "120px" }}
            whileInView={{
              top: "80px",
              transition: { duration: 0.5, delay: 0.8, ease: "linear" },
            }}
            className=" md:block absolute w-48 h-[1px] top-20 -left-12 bg-gray-800 rotate-90"
          ></motion.div>
          <motion.div
            style={{
              left: "44px",
              top: "-24px",
            }}
            initial={{ top: "20px" }}
            whileInView={{
              top: "-24px",
              transition: { duration: 0.5, delay: 0.8, ease: "linear" },
            }}
            className=" md:block absolute  w-2 h-2 bg-gray-800 rotate-45"
          ></motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
