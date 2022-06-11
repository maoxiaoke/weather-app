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
  ['humidity', {
    cn: '湿度',
    icon: '/assets/humidity.png'
  }],
  [
    'precipitation', {
      cn: '降水量',
      icon: '/assets/precipitation.png'
    }
  ],
  [
    'windSpeed', {
      cn: '风速',
      icon: '/assets/windSpeed.png'
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
    <div>fsf</div>
  )
}

export default MeteorologyList;