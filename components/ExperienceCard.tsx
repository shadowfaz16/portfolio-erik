import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import Image from 'next/image';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-75 hover:opacity-100 hover:cursor-pointer transition-opacity duration-200 overflow-hidden lg:opacity-75'>
      <motion.div
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
        className="w-28 h-28 rounded-full xl:w-32 xl:h-32 flex items-center justify-center"
      >
        <Image src={experience.companyImage} alt='btc' width={1000} height={1000} className='' />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-xl lg:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-2 mt-2">
          {experience.stack.map((stackItem: any, index: React.Key | null | undefined) => (
            <Image key={index} src={stackItem} alt='stack item' width={30} height={30} className='rounded-full' />
          ))}
        </div>


        <ul className="list-disc space-y-4 ml-5 pt-6 text-sm md:text-base">
          {experience.points.map((point: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard