import { getWeatherStatus } from '../utils/getWeatherStatus';

import type { WeatherStatus } from '../utils/getWeatherStatus';
import type { SevenDayForcastProps } from '../components/SevenDayForcast';

const getSevenDaysWeather = (lat: string, lon: string): Promise<SevenDayForcastProps['forcasts']> => {
  // TODO: v7 api does not work.
  return fetch(`https://free-api.heweather.net/s6/weather/forecast?location=${lon},${lat}&key=${process.env.HIDDEN_DEV_KEY}`).then(res => res.json())
    .then(json => {
      return (json.HeWeather6[0].daily_forecast ?? []).map((day: any) => {
        return {
          date: day.date,
          status: getWeatherStatus(day.cond_txt_d),
          tempList: [day.tmp_min, day.tmp_max],
        }
      })
    })
}

export {
  getSevenDaysWeather,
}