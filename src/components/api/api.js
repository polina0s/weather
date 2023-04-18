class Api {
  constructor() {
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  getCoordinates(name) {
    fetch(`${this.geoUrl}search?name=${name}`)
      .then((response) => response.json())
      .then((result) => console.log(result));
  }
}

const api = new Api();
export { api };
