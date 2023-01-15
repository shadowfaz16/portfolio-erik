import React from 'react'
import { motion } from 'framer-motion'
import { Client } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';


type Props = {
  client: Client;
}

const Client = ({client}: Props) => {
  return (
  <Link href={client?.website} target="_blank">
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          // x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(client?.image).url()}
        alt="client"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out bg-black"
        />
      <div className="absolute opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{client?.title}</p>
        </div>
      </div>
      
    </div>
  </Link>
  );
}

export default Client