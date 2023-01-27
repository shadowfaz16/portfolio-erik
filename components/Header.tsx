import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

type Props = {
  socials: Social[];
}

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="-mt-1 lg:mt-0"
      >
        {/* social icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
        {/* <Link href="https://t.me/shadowfaz16">
          <SocialIcon
            className="cursor-pointer"
            network="telegram"
            fgColor="gray"
            bgColor="transparent"
            url="https://t.me/shadowfaz16"
          />
        </Link> */}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* avatar */}
        <ConnectButton accountStatus="avatar" chainStatus="icon" />
      </motion.div>
    </header>
  );
}

export default Header