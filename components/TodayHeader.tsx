import Image from 'next/image';
import Link from 'next/link';
import Temperature from './Temperature';
import MeteorologyList from './MeteorologyList';
import { getDayOrNight } from '../utils/getDayOrNight';

import type { CityInfo } from '../service/getCityName';
import type { RealtimeWeather } from '../service/getNowWeather';

const TodayHeader = ({ cityInfo, realtimeWeather }: {
  cityInfo: CityInfo;
  realtimeWeather: RealtimeWeather;
}) => {
  return (
    <>
      <div className="flex pl-[22px] pr-[16px] w-full justify-between">
        <div className="mt-[69px]">
          <Link href="/">
            <Image src="/assets/left-arrow.png" width="20" height="17" alt="left arrow" />
          </Link>

          <p className="font-bold text-3xl mt-[44px]">{cityInfo.city}，</p>
          <p className="font-bold text-3xl">{cityInfo.province}</p>

          <Temperature type="lg" celsius={realtimeWeather.temp} />
        </div>
        <div className="mt-[39px]">
          <Image src={`/assets/${getDayOrNight()}-${realtimeWeather.status}.png`} width="100" height="100" alt="cloudy" />
        </div>
      </div>

      <div className="px-[22px]">
        <MeteorologyList
          type="horizen"
          list={realtimeWeather.meteorologyList}
        />
      </div>
    </>

  )
}

export default TodayHeader;
