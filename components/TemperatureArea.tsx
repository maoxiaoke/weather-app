import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export interface TemperatureAreaProps {
  data: Array<{
    time: string | Date;
    temp: string;
  }>,
  width?: number;
}

const TemperatureArea = ({ data, width = 375 }: TemperatureAreaProps) => {
  return (
    <AreaChart width={width} height={87} data={data} margin={{ left: 0 }}>
      <Area type="monotone" dataKey="temp" stroke="#E9C939" strokeWidth={2} fill="#E9C939" style={{ opacity: '0.25' }} />
    </AreaChart>
  )
}

export default TemperatureArea;

