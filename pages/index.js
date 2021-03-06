import Head from 'next/head'
import Accessories from '../components/Assesuary'
import Header from '../components/Header'
import ModelS from '../components/ModalS'
import ModelX from '../components/ModalX'
import ModelY from '../components/ModalY'
import Navbar from '../components/Navbar'
import SolarPanels from '../components/SolarPanels'
import SolarRoof from '../components/SolarRoof'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tesla clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
    <Header />
    <ModelY />
    <ModelS/>
    <ModelX/>
    <SolarPanels />
    <SolarRoof />
    <Accessories />
    </div>
  )
}
