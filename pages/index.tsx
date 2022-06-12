import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import TodayCard from '../components/TodayCard';

import { getCityName } from '../service/getCityName';
import { getNowWeather } from '../service/getNowWeather';

import type { NextPage, GetServerSideProps } from 'next';
import type { CityInfo } from '../service/getCityName';
import type { RealtimeWeather } from '../service/getNowWeather';

import styles from '../styles/Home.module.css'

const getCurrentPosition = (): Promise<{
  latitude: number,
  longitude: number,
}> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position?.coords ?? {};
        resolve({
          latitude,
          longitude
        })
      }, err => {
        reject(err)
      })
    } else {
      reject({
        code: 404,
        message: 'It\'s likely that your browser doesn\'t support Geolocation.'
      })
    }
  })
}

const Home: NextPage<{
  cityInfo: CityInfo,
  realtimeWeather: RealtimeWeather
}> = (props) => {
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position;

        router.replace(`/?lat=${latitude}&log=${longitude}`)
      } catch (e) {
        setError(e as Error);
      }
    }

    fetchGeoLocation();
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
          <TodayCard {...props} />
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Hangzhou as default
  const { lat = '30.25', lon = '120.1552' } = context?.query ?? {};

  // @ts-ignore FIXME: types
  const [cityInfo, realtimeWeather] = await Promise.all([getCityName(lat, lon), getNowWeather(lat, lon)]);

  return {
    props: {
      cityInfo,
      realtimeWeather
    },
  }
}

