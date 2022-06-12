import type { SevenDayForcastProps } from '../components/SevenDayForcast';

const getSevenDaysWeather = (lat: number, lon: number): Promise<SevenDayForcastProps['forcasts']> => {
  // TODO: v7 api does not work.
  return fetch(`https://free-api.heweather.net/s6/weather/forecast?location=${lon},${lat}&key=${process.env.HIDDEN_DEV_KEY}`).then(res => res.json())
    .then(json => {
      return (json.HeWeather6[0].daily_forecast ?? []).map((day: any) => {
        return {
          date: day.date,
          tempList: [day.tmp_min, day.tmp_max],
        }
      })
    })
}

export {
  getSevenDaysWeather,
}