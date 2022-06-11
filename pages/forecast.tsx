import Head from 'next/head'
import TodayHeader from '../components/TodayHeader';

const Forecast = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Forecast Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodayHeader />
    </div>
  )
}

export default Forecast;
