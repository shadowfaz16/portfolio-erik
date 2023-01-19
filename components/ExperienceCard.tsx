import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-75 hover:opacity-100 hover:cursor-pointer transition-opacity duration-200 overflow-hidden lg:opacity-75'>
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
        alt="companyImage"
        className="w-28 h-28 rounded-full object-cover object-center xl:w-32 xl:h-32"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl lg:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
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