import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { useClientSize } from '../hooks/useClientSize';

export interface TemperatureAreaProps {
  data: Array<{
    time: string | Date;
    temp: string;
  }>,
}

const TemperatureArea = ({ data }: TemperatureAreaProps) => {
  const [clientSize, loading] = useClientSize();
  return (
    <>
      {
        !loading && (
          <AreaChart width={clientSize.width} height={87} data={data} margin={{ left: 0 }}>
            <Area type="monotone" dataKey="temp" stroke="#E9C939" strokeWidth={2} fill="#E9C939" style={{ opacity: '0.25' }} />
          </AreaChart>
        )
      }
    </>
  )
}

export default TemperatureArea;

