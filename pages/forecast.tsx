import Head from 'next/head'
import TodayHeader from '../components/TodayHeader';
import SevenDayForcast from '../components/SevenDayForcast';
import HourlyTabs from '../components/HourlyTabs';
import { getCityName } from '../service/getCityName';
import { getNowWeather } from '../service/getNowWeather';
import { getSevenDaysWeather } from '../service/getSevenDaysWeather';
import { getHourlyWeather } from '../service/getHourlyWeather';

import type { NextPage, GetServerSideProps } from 'next';
import type { CityInfo } from '../service/getCityName';
import type { SevenDayForcastProps } from '../components/SevenDayForcast';
import type { HourlyTabsProps } from '../components/HourlyTabs';
import type { RealtimeWeather } from '../service/getNowWeather';

const Forecast: NextPage<{
  cityInfo: CityInfo,
  realtimeWeather: RealtimeWeather,
  sevenDayForcasts: SevenDayForcastProps['forcasts'],
  hourlyForcasts: HourlyTabsProps['forcasts']
}> = (props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Forecast Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodayHeader {...props} />

      <HourlyTabs forcasts={props.hourlyForcasts} />

      <div className="mt-[-40px]">
        <SevenDayForcast forcasts={props.sevenDayForcasts} />
      </div>
    </div>
  )
}

export default Forecast;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Hangzhou as default
  const { lat = '30.25', lon = '120.1552' } = (context?.query ?? {}) as {
    lat: string;
    lon: string;
  };

  const [cityInfo, realtimeWeather, sevenDayForcasts, hourlyForcasts] = await Promise.all([
    getCityName(lat, lon),
    getNowWeather(lat, lon),
    getSevenDaysWeather(lat, lon),
    getHourlyWeather(lat, lon),
  ]);

  return {
    props: {
      cityInfo,
      realtimeWeather,
      sevenDayForcasts,
      hourlyForcasts,
    },
  }
}
