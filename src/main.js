import "./styles/main.scss";
import { Input } from "./components/input/input";

const input = new Input();

// const API = import.meta.env.VITE_API;
// const API_VERSION = import.meta.env.VITE_API_VERSION;

// const MOCK_CITIES = [
//   {
//     id: 2950159,
//     name: "Berlin",
//     latitude: 52.52437,
//     longitude: 13.41053,
//     elevation: 74.0,
//     feature_code: "PPLC",
//     country_code: "DE",
//     admin1_id: 2950157,
//     admin2_id: 0,
//     admin3_id: 6547383,
//     admin4_id: 6547539,
//     timezone: "Europe/Berlin",
//     population: 3426354,
//     postcodes: ["10967", "13347"],
//     country_id: 2921044,
//     country: "Deutschland",
//     admin1: "Berlin",
//     admin2: "",
//     admin3: "Berlin, Stadt",
//     admin4: "Berlin",
//   },
//   {
//     id: 1212121,
//     name: "Batumi",
//     latitude: 52.52437,
//     longitude: 13.41053,
//     elevation: 74.0,
//     feature_code: "PPLC",
//     country_code: "DE",
//     admin1_id: 2950157,
//     admin2_id: 0,
//     admin3_id: 6547383,
//     admin4_id: 6547539,
//     timezone: "Europe/Berlin",
//     population: 3426354,
//     postcodes: ["10967", "13347"],
//     country_id: 2921044,
//     country: "Deutschland",
//     admin1: "Berlin",
//     admin2: "",
//     admin3: "Berlin, Stadt",
//     admin4: "Berlin",
//   },
// ];

// const getWeatherByLatAndLong = (latitude, longtitude) =>
//   fetch(
//     `${API}/${API_VERSION}/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature_2m`,
//     {
//       mode: "cors",
//     }
//   )
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((value) => {
//       console.log(value);
//       return value;
//     });

// document.addEventListener("input", (e) => {
//   const city = e.target.value;

//   fetch(`/blablab?city=${city}`)
//     .then((response) => response.json())
//     .then((value) => {
//       this.modal.setCityes(value);
//       this.modal.open();
//     });
// });
