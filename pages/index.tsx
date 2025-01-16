import { GetStaticProps } from 'next'
import { createClient } from 'next-sanity'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Clients from '../components/Collabs'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import { Client, Experience, PageInfo, Project, Social } from '../typings'
import { fetchClients } from '../utils/fetchClients'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import {
  ArrowUpCircleIcon
} from "@heroicons/react/24/solid";


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  clients: Client[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, clients, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/50 ">
      <Head>
      <title>{`${pageInfo.name} Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://public.cypherd.io/js/onboardingsdk.js"></script>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Clients */}
      <section id="clients" className="snap-start">
        <Clients clients={clients} />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full  lg:block">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <ArrowUpCircleIcon className="w-10 h-10 text-white hover:text-purple-500 cursor-pointer" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const clients: Client[] = await fetchClients();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      clients,
      projects,
      socials,
    },
    // revalidate: 100,
  };
};