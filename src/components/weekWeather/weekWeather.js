class WeekWeather {
  constructor(data) {
    this.createWeekWeatherElement({
      day: data.day,
      temperature: data.temperature,
    });
  }

  createWeekWeatherElement({ time, temp }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_week");

    this.element.innerHTML = `
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[24]} </div>
      <div class="weather_week--temp"> ${temp[24]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[48]} </div>
      <div class="weather_week--temp"> ${temp[48]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[72]} </div>
      <div class="weather_week--temp"> ${temp[72]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[96]} </div>
      <div class="weather_week--temp"> ${temp[96]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${120} </div>
      <div class="weather_week--temp"> ${temp[120]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[144]} </div>
      <div class="weather_week--temp"> ${temp[144]} </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[168]} </div>
      <div class="weather_week--temp"> ${temp[168]} </div>            
    `;
  }
}
