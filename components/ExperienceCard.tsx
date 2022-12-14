import React from 'react'
import { motion } from 'framer-motion';
import weset from "../public/weset.png";
import pxm from "../public/pxm.png";
import zigu from "../public/zigu.png";
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(experience?.companyImage).url()}
        alt="weset"
        className="w-28 h-28 rounded-full object-cover object-center xl:w-32 xl:h-32"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">
          Product Owner at Weset
        </h4>
        <p className="font-bold text-xl mt-1">WESET</p>
        <div className="flex space-x-2 mt-2">
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
        </div>
        <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} -{" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-base">
            {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard