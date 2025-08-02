import Head from 'next/head'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Choose from '../components/Choose'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import Numbers from '../components/Numbers'
import Products from '../components/Projects'
import Reviews from '../components/Reviews'
import ContactButtons from '../components/Call'


export default function Home() {
  return (
    <>
      <Head>
        <title>Maqawal Asphalt Al-Saudia Al-Riyadh | Home </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Products />
        <Numbers />
        <Benefits />
        <Latest />
        <Choose />
        <Reviews />
        <Contact />
        <ContactButtons/>
        {/* <News /> */}
      </main>
    </>
  )
}
