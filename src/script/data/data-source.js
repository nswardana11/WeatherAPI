class DataSource {
  static searchCity(city) {
    const apiKey = "644bd1b760da133e18a59fcdfbd027bf";
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.weather) {
      let weatherData = [];
      let getWeatherData = {
        ...responseJson
      }
      weatherData.push(getWeatherData)
        return Promise.resolve(weatherData)
      } else {
        return Promise.reject(`${city} is not found`);
      }
    });
}
}

export default DataSource;