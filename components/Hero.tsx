import React, { useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image";
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import { useAccount } from "wagmi";
import useIsMounted from './useIsMounted';

type Props = {
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
  const mounted = useIsMounted();
  const { address, isConnected } = useAccount();
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

    const useFunds = () => {
      (window as any).Cypher(
        `${address}`,
        "0x1",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        23,
      );
    }

    // useEffect(() => {
    //   if (isConnected) {
    //     console.log("Connected"); 
    //   }, [isConnected]);



  return (
    <div className="h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative mx-auto rounded-full object-cover border border-gray-600"
        alt="logo"
        width={115}
        height={115}
      />
      <div className="z-20">
        <h3 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] lg:px-0">
          {pageInfo?.role}
        </h3>
        {/* {mounted ? address : null} */}
        <h2 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mx-1">{text}</span>
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
          {mounted ? (
            isConnected ? (
              <Link href="#pay">
                <button className="heroButton" onClick={useFunds}>Pay</button>
              </Link>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Hero