import React from 'react'
import { motion } from 'framer-motion'
import Client from './Client';
import {Client as MyClient} from '../typings';

type Props = {
  clients: MyClient[];
}

const Clients = ({clients}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full flex relative flex-col text-center md:text-left xl:flex-row md:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        Web2 Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        wagmi🤝
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {clients?.map((client) => (
          <Client key={client._id} client={client} />
        ))}
      </div>
    </motion.div>
  );
}

export default Clients