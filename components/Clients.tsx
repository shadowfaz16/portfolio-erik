import React from 'react'
import { motion } from 'framer-motion'
import Client from './Client';

type Props = {}

const Clients = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="w-full flex relative flex-col text-center md:text-left xl:flex-row md:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        Happy Clients
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Click a client to see their website!
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />

        
      </div>
    </motion.div>
  );
}

export default Clients