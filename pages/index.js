import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/organisms/navbar'
import Hero from '../components/organisms/hero'
import Statistic from '../components/organisms/statistic'
import WeDo from '../components/organisms/weDo'
import Prevention from '../components/organisms/prevention'
import Symptoms from '../components/organisms/symptoms'
import NeedHelp from '../components/organisms/needHelp'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="virus1">
      <Image src="/icons/virus1.png" width={224} height={218} />
    </div>
    <div className="virus2">
      <Image src="/icons/virus2.png" width={224} height={218} />
    </div>
    <Statistic />
    <WeDo />
    <Prevention />
    <Symptoms />
    <NeedHelp />
    </>
  )
}
