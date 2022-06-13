import { getDays } from '../utils/getDays';
import { getDuodecimalHour } from '../utils/getDuodecimalHour';

export interface TemperatureProps {
  celsius: string;
  type?: 'xm' | 'sm' | 'md' | 'lg';
  showDay?: boolean;
  showTime?: boolean;
  showHour?: boolean;
  style?: React.CSSProperties;
  date?: string | Date;
}

const Temperature = ({ celsius, type, showDay = true, showTime = true, style, date, showHour = true }: TemperatureProps) => {
  let celsiusFontSize = 'text-[36px]';
  let centiFontSize = 'text-[13px]';

  switch (type) {
    case 'xm':
      celsiusFontSize = 'text-[18px]'
      centiFontSize = 'text-[10px]';
      break;
    case 'md':
        celsiusFontSize = 'text-[64px]';
        centiFontSize = 'text-[14px]';
      break;
    case 'lg':
        celsiusFontSize = 'text-[96px]';
        centiFontSize = 'text-[24px]';
      break;
    default:
      break;
  }


  return (<div>
    <div className="flex" style={style}>
      <span className={`${celsiusFontSize} font-bold leading-none`}>{celsius}</span>
      <span className={`${centiFontSize} text-sm text-[#332821] ${type==='lg' ? 'pt-[20px]' : ''}`}>°C</span>
    </div>
    { showTime && (
      <div className="text-sm text-[#332821] opacity-50">
        {
          showDay && (
            <span>{getDays(date)}，</span>
          )
        }
        { showHour && getDuodecimalHour(date)}
      </div>)}
  </div>)
}

export default Temperature;