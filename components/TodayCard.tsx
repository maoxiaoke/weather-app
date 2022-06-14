import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Temperature from './Temperature';
import MeteorologyList from '../components/MeteorologyList';
import LoadingSVG from '../components/LoadingSVG';
import { getDayOrNight } from '../utils/getDayOrNight';

import type { CityInfo } from '../service/getCityName';
import type { RealtimeWeather } from '../service/getNowWeather';

const TodayCard = ({cityInfo, realtimeWeather } : {
  cityInfo: CityInfo;
  realtimeWeather: RealtimeWeather;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { lat = 30.25, log = 120.1552 } = router?.query || {};

  const routeToForcasePage = () => {
    setLoading(true);
    router.push(`/forecast?lat=${lat}&log=${log}`)
  }

  return (
    <div className="bg-white w-57.5 h-61.75 rounded-card relative">
      <div className="absolute top-0 translate-x-1/2 -translate-y-1/2">
        <Image src={`/assets/${getDayOrNight()}-${realtimeWeather.status}.png`} width="120" height="120" alt="cloudy" />
      </div>

      <div className="mt-[79px] text-center font-bold text-xl">{cityInfo.city}，{cityInfo.province}</div>

      <div className="mt-[25px] px-[17px] flex items-center justify-between">
        <Temperature celsius={realtimeWeather.temp} type="sm" />
        <div className="px-[26px] bg-[#D4426F] rounded-[20px] text-white opacity-50 text-[10px]"> { realtimeWeather.text } </div>
      </div>

      <div
        className={`absolute bottom-0 left-1/2 h-[47px] w-[163px] -translate-x-1/2 translate-y-1/2
        flex justify-center items-center rounded-button bg-[#5E4FC1] text-white text-bold text-sm`}
        onClick={() => routeToForcasePage()}
      >
      { loading ? <LoadingSVG /> : '详情' }
      </div>


      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[50px] text-white text-lg">
        <MeteorologyList
          list={realtimeWeather.meteorologyList}
        />
      </div>
    </div>
  )
}

export default TodayCard;
