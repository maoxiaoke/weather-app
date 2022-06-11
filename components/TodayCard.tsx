import Temperature from './Temperature';
import Link from 'next/link';

const TodayCard = () => {
  return (
    <div className="bg-white w-57.5 h-61.75 rounded-card relative">
      <div className="mt-[79px] text-center font-bold text-xl">杭州市，浙江省</div>
      <Temperature celsius="36" type="sm" />
      <div
        className={`absolute bottom-0 left-1/2 h-[47px] w-[163px] -translate-x-1/2 translate-y-1/2
        flex justify-center items-center rounded-button bg-[#5E4FC1] text-white text-bold text-sm`}
      >
        <Link href="/detail">详情</Link>
      </div>
    </div>
  )
}

export default TodayCard;

