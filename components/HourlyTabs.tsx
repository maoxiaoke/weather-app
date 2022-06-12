import dynamic from "next/dynamic";
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

const HourlyTabs = ({ forcasts }: HourlyTabsProps) => {
  return (
    <div>
      <p className="ml-[20px] mt-[20px] ext-lg font-bold">Today</p>

      <NoSSRComponent data={forcasts.slice(0, 6)} />

      <ul className="flex justify-around opacity-50">
        {
          forcasts.slice(0, 6).map((forcast) => (
            <li key={forcast.time.toString()}>{getDuodecimalHour(forcast.time)}</li>
          ))
        }
      </ul>

      <ul className="flex h-[160px] w-full overflow-x-scroll mt-[11px]">
        {
          forcasts.map((forcast) => (
            <li key={forcast.time.toString()} className="h-[109px] rounded-[20px] flex-shrink-0 flex-grow-0 basis-[90px] relative flex items-center justify-center ml-[30px] bg-white">
              <Temperature celsius={forcast.temp} type="sm" date={forcast.time} />
              <div className="absolute bottom-0 translate-y-1/3 w-[90px] h-[33px] bg-[#ECECEC] rounded-[20px] blur-[20px] -z-10"></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default HourlyTabs;
