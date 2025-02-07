import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <div className="relative min-h-screen w-full py-16 sm:py-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[15px] uppercase text-gray-500">
            About me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <motion.img
              src={urlFor(pageInfo?.profilePic).url()}
              alt="Profile"
              className="rounded-2xl object-cover w-full h-full shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-8 max-w-2xl mx-auto lg:mx-0"
          >
            <h3 className="text-3xl sm:text-4xl font-bold">
              Here is a{" "}
              <span className="underline decoration-purple-600 decoration-4">
                little
              </span>{" "}
              background
            </h3>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {pageInfo?.backgroundInfo}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About