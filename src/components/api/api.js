class Api {
  constructor() {
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  getCities(name) {
    let countries = [];
    let cities = [];
    fetch(`${this.geoUrl}search?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        let a = result.results;
        a.forEach((el) => {
          countries.push(el.country);
          cities.push(el.name);
        });
      });
    return countries, cities;
  }
}

const api = new Api();
export { api };
