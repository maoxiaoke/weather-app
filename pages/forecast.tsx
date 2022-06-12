import Head from 'next/head'
import TodayHeader from '../components/TodayHeader';
import { getCityName } from '../service/getCityName';
import { getNowWeather } from '../service/getNowWeather';

import type { NextPage, GetServerSideProps } from 'next';
import type { CityInfo } from '../service/getCityName';
import type { RealtimeWeather } from '../service/getNowWeather';
import { useEffect } from 'react';

const Forecast: NextPage<{
  cityInfo: CityInfo,
}> = (props) => {
  useEffect(() => {
    console.log('forsee')
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Forecast Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodayHeader {...props} />
    </div>
  )
}

export default Forecast;

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
