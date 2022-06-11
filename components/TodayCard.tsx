import Link from 'next/link';
import Image from 'next/image';
import Temperature from './Temperature';
import MeteorologyList from '../components/MeteorologyList';

const TodayCard = () => {
  return (
    <div className="bg-white w-57.5 h-61.75 rounded-card relative">
      <div className="absolute top-0 translate-x-1/2 -translate-y-1/2">
        <Image src="/assets/cloudy.png" width="120" height="120" alt="cloudy" />
      </div>

      <div className="mt-[79px] text-center font-bold text-xl">杭州市，浙江省</div>

      <div className="mt-[25px] px-[17px]">
        <Temperature celsius="15" type="sm" />
      </div>

      <Link href="/forecast">
        <div
          className={`absolute bottom-0 left-1/2 h-[47px] w-[163px] -translate-x-1/2 translate-y-1/2
          flex justify-center items-center rounded-button bg-[#5E4FC1] text-white text-bold text-sm`}
        >
        详情
        </div>
      </Link>


      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[50px] text-white text-lg">
        <MeteorologyList
          list={[
            {
              indicator: 'precipitation',
              value: '6%'
            },
            {
              indicator: 'humidity',
              value: '90%'
            },
            {
              indicator: 'windSpeed',
              value: '19 km/h'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default TodayCard;

