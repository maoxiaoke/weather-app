import type { NextPage } from 'next'
import Head from 'next/head'
import TodayCard from '../components/TodayCard';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Today Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        <div className="flex items-center justify-center h-full w-full">
          <TodayCard />
        </div>
      </main>
    </div>
  )
}

export default Home
