import Image from 'next/image';
import Temperature from '../components/Temperature';
import { getDays } from '../utils/getDays';
import { getDayOrNight } from '../utils/getDayOrNight';

import type { WeatherStatus } from '../utils/getWeatherStatus';

export interface SevenDayForcastProps {
  forcasts: Array<{
    date: Date;
    status: WeatherStatus;
    tempList: [string, string]
  }>
}

const SevenDayForcast = ({ forcasts }: SevenDayForcastProps) => {
  return (
    <ul className="pl-[20px] pr-[22px] mt-[21px]">
      { forcasts.slice(1).map((forcast, index) => (
        <li className="grid grid-cols-3 pt-[14px] pb-[14px]" key={index}>
          <span className="text-lg font-bold flex items-center">{getDays(forcast.date)}</span>
          <div>
            <Image src={`/assets/${getDayOrNight()}-${forcast.status}.png`} alt="weather icon" width={50} height={50} />
          </div>
          <div className="flex items-center">
            <Temperature type="xm" celsius={forcast.tempList[1]} showTime={false} />
            <div className="ml-[10px]" />
            <Temperature type="xm" celsius={forcast.tempList[0]} showTime={false} style={{ color: '#332821', opacity: '0.5' }} />
          </div>
        </li>
      )) }
    </ul>
  )
}

export default SevenDayForcast;
