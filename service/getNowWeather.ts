import type { MeteorologyListProps } from '../components/MeteorologyList';

export type WeatherStatus = 'sun' | 'rain' | 'snow' | 'cloud' | 'storm';

const cnTranslateMap: Array<[string, WeatherStatus]> = [['晴', 'sun'], ['雨','rain'], ['雪', 'snow'], ['阴', 'cloud'], ['暴', 'storm']];

export type RealtimeWeather = {
  temp: string,
  status: WeatherStatus;
  meteorologyList: MeteorologyListProps['list'],
}

const getNowWeather = (lat: string, lon: string): Promise<RealtimeWeather> => {
  return fetch(`https://devapi.qweather.com/v7/weather/now?location=${lon},${lat}&key=${process.env.API_KEY}`).then(res => res.json())
    .then(json => {
      const { temp, windSpeed, humidity, precip, text } = json?.now ?? {};
      const statusItem = cnTranslateMap.find(item => text.includes(item[0]));

      const status = statusItem ? statusItem[1] : 'sun';

      console.log('fsfsf',status)
      return {
        temp,
        status,
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