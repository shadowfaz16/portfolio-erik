import React from 'react'
import { motion } from 'framer-motion'
import metashadow from "../public/metashadowlogo.png";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl">
          About me
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          // viewport={{once: true}}
          src={urlFor(pageInfo?.profilePic).url()}
          className="-mb-20 flex-shrink-0 w-44 h-44 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-5 lg:space-y-10 px-0 md:px-10">
          <h4 className="lg:text-4xl text-2xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#6d28d9]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm lg:text-lg">
            {pageInfo?.backgroundInfo}
          </p>
        </div>
      </motion.div>
  );
}

export default About