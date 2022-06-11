import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import TodayCard from '../components/TodayCard';

import { getCityName } from '../service/getCityName';
import { getNowWeather } from '../service/getNowWeather';

import type { GetServerSideProps } from 'next';
import type { CityInfo } from '../service/getCityName';
import type { RealtimeWeather } from '../service/getNowWeather';

import styles from '../styles/Home.module.css'

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position?.coords ?? {};
        resolve({
          latitude,
          longitude
        })
      })
    } else {
      reject(false)
    }
  })
}

const Home: NextPage<{
  cityInfo: CityInfo,
  realtimeWeather: RealtimeWeather
}> = ({
  cityInfo,
  realtimeWeather,
}) => {
  useEffect(() => {
    const fetcha = async () => {
      const position = await getCurrentPosition();
      if (!position) {

      }
      // const { latitude, longitude } = position;
    }

    fetcha();
  }, [])

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Hangzhou as default
  const { lat = '30.25', lon = '120.1552' } = context?.query ?? {};

  // @ts-ignore
  const [cityInfo, realtimeWeather] =  Promise.all([getCityName(lat, lon), getNowWeather(lat, lon)]);

  return {
    props: {
      cityInfo,
      realtimeWeather
    },
  }
}

