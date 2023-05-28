class WeekWeather {
  constructor(data) {
    this.createWeekWeatherElement({
      day: data.day,
      temperature: data.temperature,
    });
  }

  createWeekWeatherElement({ day, temperature }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_week");

    this.element.innerHTML = `
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${day} </div>
      <div class="weather_week--temp"> ${temperature} </div>            
    `;
  }
}
