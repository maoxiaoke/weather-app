import type { HourlyTabsProps } from '../components/HourlyTabs';

const getHourlyWeather = (lat: number, lon: number): Promise<HourlyTabsProps['forcasts']> => {
  console.log('fsfsfaa', `https://free-api.heweather.net/s6/weather/forecast?location=${lon},${lat}&key=836a1476f2ec4e6895b2c4087e6c1bab`)
  return fetch(`https://devapi.qweather.com/v7/weather/24h?location=${lon},${lat}&key=836a1476f2ec4e6895b2c4087e6c1bab`).then(res => res.json())
    .then(json => {
      return (json?.hourly ?? []).map((hourly: any) => (
        {
          time: hourly.fxTime,
          temp: hourly.temp
        }
      ))
    })
}

export {
  getHourlyWeather,
}