import type { HourlyTabsProps } from '../components/HourlyTabs';

const getHourlyWeather = (lat: number, lon: number): Promise<HourlyTabsProps['forcasts']> => {
  return fetch(`https://devapi.qweather.com/v7/weather/24h?location=${lon},${lat}&key=${process.env.HIDDEN_DEV_KEY}`).then(res => res.json())
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