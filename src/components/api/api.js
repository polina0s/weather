class Api {
  constructor() {
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  getCities(name) {
    let results;
    fetch(`${this.geoUrl}search?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        results = result.results;
      });
    return results;
  }
}

const api = new Api();
export { api };
