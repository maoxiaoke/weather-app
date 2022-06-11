export interface TemperatureProps {
  celsius: string;
  type?: 'sm' | 'md' | 'lg';
  showDay?: boolean;
}

const Temperature = ({ celsius, type, showDay = false }: TemperatureProps) => {
  let celsiusFontSize = 'text-[36px]';

  switch (type) {
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
    <div className="flex">
      <span className={`${celsiusFontSize} font-bold leading-none`}>{celsius}</span>
      <span className="text-sm text-[#332821]">°C</span>
    </div>
    <div className="text-sm text-[#332821] opacity-50">
      {
        showDay && (
          <span>周日，</span>
        )
      }
      11 am
    </div>
  </div>)
}

export default Temperature;