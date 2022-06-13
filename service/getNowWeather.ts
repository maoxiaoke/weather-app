import { getWeatherStatus } from '../utils/getWeatherStatus';

import type { MeteorologyListProps } from '../components/MeteorologyList';
import type { WeatherStatus } from '../utils/getWeatherStatus';

export type RealtimeWeather = {
  temp: string,
  status: WeatherStatus;
  meteorologyList: MeteorologyListProps['list'],
  text?: string;
}

const getNowWeather = (lat: string, lon: string): Promise<RealtimeWeather> => {
  return fetch(`https://devapi.qweather.com/v7/weather/now?location=${lon},${lat}&key=${process.env.API_KEY}`).then(res => res.json())
    .then(json => {
      const { temp, windSpeed, humidity, precip, text } = json?.now ?? {};

      return {
        temp,
        status: getWeatherStatus(text),
        text,
        meteorologyList: [{
          indicator: 'precipitation',
          value: `${precip} mm`,
        }, {
          indicator: 'humidity',
          value: `${humidity}%`,
        }, {
          indicator: 'windSpeed',
          value: `${windSpeed} km/h`
        }]
      }
    })
}

export {
  getNowWeather,
}