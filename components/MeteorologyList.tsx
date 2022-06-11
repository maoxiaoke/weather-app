/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export interface MeteorologyListProps {
  type?: "vertical" | 'horizen';
  list: Array<{
    indicator: 'humidity' | 'precipitation' | 'windSpeed',
    value: string;
  }>
}

const indicatorMap = new Map([
  [
    'precipitation', {
      cn: '降水量',
      icon: '/assets/precipitation.png',
    }
  ],
  ['humidity', {
    cn: '湿度',
    icon: '/assets/humidity.png',
  }],
  [
    'windSpeed', {
      cn: '风速',
      icon: '/assets/windSpeed.png',
    }
  ]
])

const MeteorologyList = ({ type = 'vertical', list }: MeteorologyListProps) => {
  if (type === 'vertical') {
    return (
      <ul>
        {
          list.map((item, index) => (
            <li key={index} className="w-[160px] grid grid-cols-5">
              <span className="col-span-1 flex items-center h-full">
                <span className="text-[0px] w-[18px] flex justify-center">
                  <img src={indicatorMap.get(item.indicator)?.icon} alt={item.indicator} className="h-[18px]" />
                </span>
              </span>
              <span className="col-span-2">{indicatorMap.get(item.indicator)?.cn}</span>
              <span className="col-span-2 text-right">{item.value}</span>
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <ul className="flex justify-between">
      {
        list.map((item, index) => (
          <li key={index} className={`rounded-[20px] bg-windSpeed flex items-center py-[5px] px-[15px] opacity-10`} >
            <Image src={indicatorMap.get(item.indicator)!.icon} alt={item.indicator} width="24" height="24" />
            <span className="text-[#5E4FC1]">{item.value}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default MeteorologyList;