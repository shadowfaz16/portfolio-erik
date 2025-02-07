import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HackathonProject {
  name: string;
  location: string;
  date: string;
  project: string;
  prize: string;
  logo: string;
  projectUrl: string;
}

const hackathons: HackathonProject[] = [
  {
    name: "ETH Denver",
    location: "Denver, USA",
    date: "2024",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-denver.png",
    projectUrl: "#"
  },
  {
    name: "ETH Lisbon",
    location: "Lisbon, Portugal",
    date: "2023",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-lisbon.png",
    projectUrl: "#"
  },
  {
    name: "ETH New York",
    location: "New York City, USA",
    date: "2023",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-nyc.png",
    projectUrl: "#"
  },
  {
    name: "ETH San Francisco",
    location: "San Francisco, USA",
    date: "2023",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-sf.png",
    projectUrl: "#"
  },
  {
    name: "ETH Sydney",
    location: "Sydney, Australia",
    date: "2023",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-sydney.png",
    projectUrl: "#"
  },
  {
    name: "ETH Barcelona",
    location: "Barcelona, Spain",
    date: "2023",
    project: "Project name will go here",
    prize: "Prize details will go here",
    logo: "/hackathons/eth-barcelona.png",
    projectUrl: "#"
  }
];

const Hackathons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left max-w-7xl px-4 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        Hackathons
      </h3>

      <div className="w-full mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1d1d1d] p-6 rounded-xl hover:bg-[#2d2d2d] transition-all duration-300 group"
          >
            <Link href={hackathon.projectUrl} target="_blank" className="block">
              <div className="relative w-full h-32 mb-4 overflow-hidden rounded-lg bg-[#2d2d2d] flex items-center justify-center">
                <div className="relative w-24 h-24 transform group-hover:scale-110 transition-transform duration-300">
                  {/* Replace with actual logo once available */}
                  <div className="w-full h-full bg-purple-600/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    {hackathon.name.split(' ')[1][0]}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-purple-500">
                    {hackathon.name}
                  </h4>
                  <span className="text-sm text-gray-400">{hackathon.date}</span>
                </div>
                
                <p className="text-sm text-gray-400">{hackathon.location}</p>
                
                <div className="pt-4 border-t border-gray-700">
                  <h5 className="text-md font-medium mb-1">{hackathon.project}</h5>
                  <p className="text-sm text-purple-400">{hackathon.prize}</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-2/3 right-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </motion.div>
  );
};

export default Hackathons; 