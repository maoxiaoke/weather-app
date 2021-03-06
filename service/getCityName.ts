export type CityInfo = Record<'city' | 'province', string>

const getCityName = (lat: string, lon: string) => {
  return fetch(`https://geoapi.qweather.com/v2/city/lookup?location=${lon},${lat}&key=${process.env.API_KEY}`).then(res => res.json())
  .then(json => {
    const { adm2, adm1 } = json?.location[0] ?? {};

    return {
      city: adm2 + '市',
      province: adm1,
    }
  })
}

export {
  getCityName,
}