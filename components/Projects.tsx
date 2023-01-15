import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from "../sanity";


type Props = {
  projects: Project[];
}

const Projects = ({projects}: Props) => {
  
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
        {projects?.map((project, id) => (
          <div
            key={id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-10 items-center justify-center p-20 md:p-44 h-screen"
          >
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
              src={urlFor(project?.image).url()}
              alt="project"
              className="w-44 h-44"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center xl:text-4xl">
                <span className="underline decoration-[#000000]/50">
                  {/* Case Study {id + 1} of {projects?.length}: */}
                </span>{" "}
                {project?.title}

              </h4>
              
              <p className="text-center">
                {project?.summary}
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