"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hallo, I am Anvesha
            </span>
          </h1>
          <p className="text-orange-500 text-base sm:text-lg mb-6 lg:text-xl">
            a computer science student who's still in the process of discovering her passion.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <Link
              href="https://www.linkedin.com/in/anvesha-singh-330ba9260/"
              className="px-3 py-3 w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              <Image src="/images/linkedin.svg" alt="Linkedin Icon" width={30} height={30} />
            </Link>
            <Link
              href="https://github.com/Anvesha-Singh"
              className="px-3 py-3 w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              <Image src="/images/github.svg" alt="Github Icon" width={30} height={30} />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1M2yK4iOErwrBXoV6cAi9GQo_xBzFPt5E/view?usp=drivesdk" download="cv"
              className="px-1 py-1 w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-0 sm:ml-8 flex justify-center"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/pfp.jpg"
              alt="Profile picture"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
