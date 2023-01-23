
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExpience'

console.log("🙋");

export default function Home() {
  return (
    <div style={{
      scrollBehavior: "smooth"
    }} className='bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Hitotsu page</title>
      </Head>

      <Header />

      <section id="hero" className=''>
        <Hero />
      </section>

      <section id='about' className=''>
        <About />
      </section>

      <section id="experience" className=''>
        <WorkExperience />
      </section>

      <section id="skills" className=''>
        <Skills />
      </section>

      <section id="projects" className=''>
        <Projects />
      </section>

      <section id="contact" className=''>
        <ContactMe />
      </section>
    </div>
  )
}
