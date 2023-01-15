import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image";
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
      words: [
        `${pageInfo?.name}`,
        "Bullish on web3",
        "<ILoveToCode />",
        "Also-love-Crypto.tsx",
      ],
      loop: true,
      delaySpeed: 2000,
    });

    // console.log("check token", process.env.NEXT_PUBLIC_BASE_URL);

  return (
    <div className="h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative mx-auto rounded-full object-cover border border-gray-600"
        alt="logo"
        width={115}
        height={115}
      />
      <div className="z-20">
        <h3 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] px-3 lg:px-0">
          {pageInfo?.role}
        </h3>
        <h2 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#6d28d9" />
        </h2>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Clients</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero