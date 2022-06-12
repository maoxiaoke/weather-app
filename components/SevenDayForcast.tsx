import Temperature from '../components/Temperature';
import { getDays } from '../utils/getDays';

export interface SevenDayForcastProps {
  forcasts: Array<{
    date: Date;
    tempList: [string, string]
  }>
}

const SevenDayForcast = ({ forcasts }: SevenDayForcastProps) => {
  return (
    <ul className="pl-[20px] pr-[22px] mt-[21px]">
      { forcasts.slice(1).map((forcast, index) => (
        <li className="grid grid-cols-3 pt-[14px] pb-[14px]" key={index}>
          <span className="text-lg font-bold">{getDays(forcast.date)}</span>
          <span>天气</span>
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
