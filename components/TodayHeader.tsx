import Image from 'next/image';
import Link from 'next/link';
import Temperature from './Temperature';
import MeteorologyList from './MeteorologyList';

const TodayHeader = () => {
  return (
    <>
      <div className="flex pl-[22px] pr-[16px] w-full justify-between">
        <div className="mt-[69px]">
          <Link href="/">
            <Image src="/assets/left-arrow.png" width="20" height="17" alt="left arrow" />
          </Link>

          <p className="font-bold text-3xl mt-[44px]">杭州市，</p>
          <p className="font-bold text-3xl">浙江省</p>

          <Temperature type="lg" celsius="15" />
        </div>
        <div className="mt-[39px]">
          <Image src="/assets/cloudy.png" width="100" height="100" alt="cloudy" />
        </div>
      </div>

      <div className="px-[22px]">
        <MeteorologyList
          type="horizen"
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
    </>

  )
}

export default TodayHeader;
