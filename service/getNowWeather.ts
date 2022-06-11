export type RealtimeWeather = Record<'temp' | 'windSpeed' | 'humidity' | 'precip', string>

const getNowWeather = (lat: number, lon: number) => {
  return fetch(`https://devapi.qweather.com/v7/weather/now?location=${lon},${lat}&key=${process.env.API_KEY}`).then(res => res.json())
    .then(json => {
      const { temp, windSpeed, humidity, precip } = json?.now ?? {};

      return {
        temp,
        windSpeed,
        humidity,
        precip,
      }
    })
}

export {
  getNowWeather,
}