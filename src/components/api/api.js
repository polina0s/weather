class Api {
  constructor() {
    // this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  async getCities(name) {
    const response = await fetch(`${this.geoUrl}search?name=${name}`);
    const json = await response.json();
    return json.results;
  }
}

const api = new Api();
export { api };
