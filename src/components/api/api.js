class Api {
  constructor() {
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.geoUrl = import.meta.env.VITE_GEO_URL;
  }

  getCities(name) {
    let cities = [];
    fetch(`${this.geoUrl}search?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        let results = result.results;
        results.forEach((el) => {
          cities.push(el.name);
        });
      });
    return cities;
  }

  getCountries(name) {
    let countries = [];
    fetch(`${this.geoUrl}search?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        let results = results.results;
        results.forEach((el) => {
          countries.push(el.country);
        });
      });
    return countries;
  }
}

const api = new Api();
export { api };
