/* eslint-disable @next/next/no-img-element */
import type { SVGProps } from 'react';
import Image from 'next/image';
import { WindSpeedIcon, PrecipitationIcon, HumidityIcon } from './svgs';

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
      defaultIcon: <PrecipitationIcon color='#FFF' />,
      horizenIcon: <PrecipitationIcon color='#658ED9' />,
    }
  ],
  ['humidity', {
    cn: '湿度',
    defaultIcon: <HumidityIcon color='#FFF' />,
    horizenIcon: <HumidityIcon color='#D86191' />
  }],
  [
    'windSpeed', {
      cn: '风速',
      defaultIcon: <WindSpeedIcon color='#FFF' />,
      horizenIcon: <WindSpeedIcon color='#5E4FC1' />,
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
                <span className="text-[0px] w-[24px] h-[24px] flex justify-center">
                  { indicatorMap.get(item.indicator)?.defaultIcon }
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
          <li key={index}
            className={`rounded-[20px] flex items-center py-[5px] px-[15px]
            ${item.indicator === 'precipitation' ? 'bg-precipitation-rgba' : (item.indicator === 'humidity' ? 'bg-humidity-rgba' : 'bg-windSpeed-rgba')}`}
            >
            { indicatorMap.get(item.indicator)?.horizenIcon }
            <span className={`${item.indicator === 'precipitation' ? 'text-precipitation' : (item.indicator === 'humidity' ? 'text-humidity' : 'text-windSpeed')}`}>{item.value}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default MeteorologyList;