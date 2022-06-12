export interface HourlyTabsProps {
  forcasts: Array<{
    time: Date;
    temp: string;
  }>
}

const HourlyTabs = ({ forcasts }: HourlyTabsProps) => {
  return (
    <div>
      <p className="ml-[20px] mt-[20px] ext-lg font-bold">Today</p>
    </div>
  )
};

export default HourlyTabs;
