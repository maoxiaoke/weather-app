import { getDays } from '../utils/getDays';
import { getDuodecimalHour } from '../utils/getDuodecimalHour';

export interface TemperatureProps {
  celsius: string;
  type?: 'xm' | 'sm' | 'md' | 'lg';
  showDay?: boolean;
  showTime?: boolean;
  style?: React.CSSProperties;
  date?: string | Date;
}

const Temperature = ({ celsius, type, showDay = false, showTime = true, style, date }: TemperatureProps) => {
  let celsiusFontSize = 'text-[36px]';

  switch (type) {
    case 'xm':
      celsiusFontSize = 'text-[18px]'
      break;
    case 'md':
        celsiusFontSize = 'text-[64px]'
      break;
    case 'lg':
        celsiusFontSize = 'text-[96px]'
      break;
    default:
      break;
  }

  return (<div>
    <div className="flex" style={style}>
      <span className={`${celsiusFontSize} font-bold leading-none`}>{celsius}</span>
      <span className="text-sm text-[#332821]">°C</span>
    </div>
    { showTime && (
      <div className="text-sm text-[#332821] opacity-50">
        {
          showDay && date && (
            <span>{getDays(date)}，</span>
          )
        }
        { date && getDuodecimalHour(date)}
      </div>)}
  </div>)
}

export default Temperature;