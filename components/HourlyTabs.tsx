import Canvas from '@antv/f2-react';
import { Chart, Interval } from '@antv/f2';

import Temperature from '../components/Temperature';
export interface HourlyTabsProps {
  forcasts: Array<{
    time: Date;
    temp: string;
  }>
}

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const HourlyTabs = ({ forcasts }: HourlyTabsProps) => {
  return (
    <div>
      <p className="ml-[20px] mt-[20px] ext-lg font-bold">Today</p>

      <Canvas>
        <Chart data={data}>
          <Interval x="genre" y="sold" />
        </Chart>
      </Canvas>

      <ul className="flex h-[160px] w-full overflow-x-scroll mt-[11px]">
        {
          forcasts.map((forcast, index) => (
            <li key="index" className="h-[109px] rounded-[20px] flex-shrink-0 flex-grow-0 basis-[90px] relative flex items-center justify-center ml-[30px] bg-white">
              <Temperature celsius="14" type="sm" />
              <div className="absolute bottom-0 translate-y-1/3 w-[90px] h-[33px] bg-[#ECECEC] rounded-[20px] blur-[20px] -z-10"></div>
              {/* <div>fs</div> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default HourlyTabs;
