class weatherForecast {
  constructor() {}

  createWeatherForecast(weathercode, temperature, weather) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_forecast");

    this.element.innerHTML = `div.weather_forecast--img_cont 
      img.weather_forecast--img(src="/src/pictures/${weathercode}.png", alt="0")
    div.weather_forecast--temp ${temperature}
    div.weather_forecast--weather ${weather}`;
    //  div.weather_forecast
    // div.weather_forecast--img_cont
    //   img.weather_forecast--img(src="/src/pictures/0.png", alt="0")
    // div.weather_forecast--temp 23°C
    // div.weather_forecast--weather clear sky
  }
}
