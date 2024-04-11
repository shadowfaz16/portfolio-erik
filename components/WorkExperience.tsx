'use client'
import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
import decent from "../assets/logos/decent.svg"
import mygeotokens from "../assets/logos/mygeotokens.jpg"
import weset from "../assets/logos/weset.webp"
import gang from "../assets/logos/intergalactic.png"
import nextjs from "../assets/logos/nextjs.png"
import pxm from "../assets/logos/pxmlogo.svg"
import react from "../assets/logos/react.svg"
import moralis from "../assets/logos/moralis.svg"
import rainbow from "../assets/logos/rainbow.svg"
import refi from "../assets/logos/refi-rides-logo.png"
import op from "../assets/coins/op.png"
import bnb from "../assets/coins/bnb.png"
import sol from "../assets/coins/sol.png"
import eth from "../assets/coins/eth.png"
import link from "../assets/coins/link.png"
import thirdwebb from '../assets/logos/thirdweb-circle-dark.svg'
import openai from '../assets/logos/openai.png'
import veme from '../assets/logos/veme.png'
import { StaticImageData } from 'next/image';

const experiences: Experience[] = [
  {
    url: "https://veme-beta.vercel.app/",
    _type: 'experience',
    company: "AI generated memes platform",
    companyImage: veme,
    stack: [openai, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "VEME",
    points: [
      "Frontend",
      "Connection to OpenAI API",
      "Meme generation and sharing"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://mint.mygeotokens.com/",
    _type: 'experience',
    company: "solana nfts",
    companyImage: mygeotokens,
    stack: [sol, thirdwebb, link, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "MyGeoTokens",
    points: [
      "Solana smart contracts",
      "Minting site",
      "Verifiable source of randomness for smart contracts (Chainlink Integration)"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://weset.app/",
    _type: 'experience',
    company: "RWA marketplace",
    companyImage: weset,
    stack: [bnb, moralis, thirdwebb, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "Weset",
    points: [
      "Dashboards for collection admins and token holders",
      "Web2 and web3 login",
      "Crypto and credit card sales"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://pxmxchange.thepxm.org/",
    _type: 'experience',
    company: "Onramp & offramp",
    companyImage: pxm,
    stack: [nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "PXM",
    points: [
      "Custodial exchange",
      "Web2 social logins",
      "Integration with Tatum API"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://decent-tickets.vercel.app/",
    _type: 'experience',
    company: "nft event ticketing system",
    companyImage: decent,
    stack: [op, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "decent xyz",
    points: [
      "Smart contracts & UI",
      "Optimism attestation stations",
      "QR code integration"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://refirides.com/",
    _type: 'experience',
    company: "NFT collection",
    companyImage: refi,
    stack: [eth, thirdwebb, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "Refi Rides",
    points: [
      "Credit card checkout",
      "Polygon smart contracts",
      "Powered y Thirdweb"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },
  {
    url: "https://intergalactic-gang-front.vercel.app/",
    _type: 'experience',
    company: "NFT collection",
    companyImage: gang,
    stack: [eth, rainbow, nextjs, react],
    dateStarted: "date",
    dateEnded: "date",
    isCurrentlyWorkingHere: true,
    jobTitle: "Intergalactic Gang",
    points: [
      "Art layers for randomized NFTs",
      "Ethereum smart contracts",
      "Minting site with Rainbowkit"
    ],
    _createdAd: "date",
    _id: "string",
    _rev: "string",
    _updatedAt: "date",
  },

]

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-center max-w-full px-8 md:px-10 justify-evenly mx-auto items-center md:flex-row xl:space-y-10"
    >
      <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-xl md:top-24">
        Recent projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6d28d9]/50 mt-24 text-left md:mt-10">
        {experiences
          ?.sort(
            (a, b) =>
              new Date(b.dateStarted).getTime() -
              new Date(a.dateStarted).getTime(),
          )
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience