import React from 'react'
import { motion } from 'framer-motion'
import metashadow from "../public/metashadowlogo.png";


type Props = {
    directionLeft?: boolean
}

const Client = ({directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://pbs.twimg.com/profile_images/1592562041277014018/Y5zcTsbi_400x400.png"
        alt="client"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Client