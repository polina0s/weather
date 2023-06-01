class Api {
  constructor() {
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  async getCities(name) {
    const response = await fetch(`${this.geoUrl}search?name=${name}`);
    const json = await response.json();
    return json.results;
  }

  async getCurrentWeather(latitude, longitude) {
    const response = await fetch(
      `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`
    );
    const json = await response.json();
    const currentWeather = json.current_weather;
    return currentWeather;
  }

  async getForecast(latitude, longitude) {
    const response = await fetch(
      `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true&forecast_days=7`
    );
    const json = await response.json();
    const forecast = json.hourly;
    return forecast;
  }
}

const api = new Api();
export { api };
