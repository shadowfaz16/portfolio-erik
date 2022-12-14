import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2 ,3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#6d28d9]/50">
        {projects.map((project, id) => (
          <div key={id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-10 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src="https://pbs.twimg.com/profile_images/1592562041277014018/Y5zcTsbi_400x400.png"
              alt="project"
              className='w-44 h-44'
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center xl:text-4xl">
                <span className="underline decoration-[#000000]/50">
                  Case Study {id + 1} of {projects.length}:
                </span>{" "}
                UPS
              </h4>
              <p className="text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. in
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#6d28d9]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects