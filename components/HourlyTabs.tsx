import dynamic from "next/dynamic";
import { useState } from "react";
import Temperature from '../components/Temperature';
import { getDuodecimalHour } from '../utils/getDuodecimalHour';

const NoSSRComponent = dynamic(() => import("./TemperatureArea"), {
  ssr: false,
});
export interface HourlyTabsProps {
  forcasts: Array<{
    time: Date | string;
    temp: string
  }>
}

const getSlicedForcasts = (forcasts: HourlyTabsProps['forcasts'], idx: number) => {
  if (idx < 3) {
    return forcasts.slice(0, 6);
  }

  if (idx > 21) {
    return forcasts.slice(-6);
  }

  return forcasts.slice(idx - 2, idx + 4)
}

const HourlyTabs = ({ forcasts }: HourlyTabsProps) => {
  const [chosen, setChosen ] = useState(forcasts[2].time.toString())

  const chosenIdx = forcasts.findIndex(forcast => forcast.time.toString() === chosen);
  const slicedForcasts = getSlicedForcasts(forcasts, chosenIdx);

  return (
    <div>
      <p className="ml-[20px] mt-[20px] ext-lg font-bold">Today</p>

      <div className="mt-[11px]">
        <NoSSRComponent data={slicedForcasts} />
      </div>

      <ul className="flex justify-around opacity-50">
        {
          slicedForcasts.map((forcast) => (
            <li key={forcast.time.toString()}>{getDuodecimalHour(forcast.time)}</li>
          ))
        }
      </ul>

      <ul className="flex min-h-[150px] w-full overflow-x-scroll mt-[11px]">
        {
          forcasts.map((forcast) => (
            <li
              key={forcast.time.toString()} className="h-[109px] rounded-[20px] flex-shrink-0 flex-grow-0 basis-[90px] relative flex items-center justify-center ml-[30px] bg-white"
              onClick={() => setChosen(forcast.time.toString())}
              >
              <Temperature celsius={forcast.temp} type="sm" date={forcast.time} showDay={false} />
              {
                (chosen === forcast.time.toString()) && (
                  <div className="absolute bottom-0 translate-y-1/3 w-[90px] h-[33px] bg-[#ECECEC] rounded-[20px] blur-[20px] -z-10"></div>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default HourlyTabs;
