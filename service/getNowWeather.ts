import type { MeteorologyListProps } from '../components/MeteorologyList';

export type RealtimeWeather = {
  temp: string,
  meteorologyList: MeteorologyListProps['list'],
}

const getNowWeather = (lat: number, lon: number): Promise<RealtimeWeather> => {
  return fetch(`https://devapi.qweather.com/v7/weather/now?location=${lon},${lat}&key=${process.env.API_KEY}`).then(res => res.json())
    .then(json => {
      const { temp, windSpeed, humidity, precip } = json?.now ?? {};

      return {
        temp,
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