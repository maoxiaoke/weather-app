
export type WeatherStatus = 'sun' | 'rain' | 'snow' | 'cloud' | 'storm';

const cnTranslateMap: Array<[string, WeatherStatus]> = [['晴', 'sun'], ['雨','rain'], ['雪', 'snow'], ['云', 'cloud'], ['暴', 'storm']];

/**
 * For the api returns https://dev.qweather.com/docs/api/weather/weather-now/ weather description for Chinese
 * @param text weather description
 */
const getWeatherStatus = (text: string) => {
  const statusItem = cnTranslateMap.find(item => text.includes(item[0]));

  return statusItem ? statusItem[1] : 'sun';
}

export {
  getWeatherStatus
}
