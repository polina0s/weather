export class WeekWeather {
  constructor(time, temp) {
    this.createWeekWeatherElement(time, temp);
  }

  createWeekWeatherElement(time, temp) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_week");

    this.element.innerHTML = `
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[23]} </div>
      <div class="weather_week--temp"> ${temp[23]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[47]} </div>
      <div class="weather_week--temp"> ${temp[47]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[71]} </div>
      <div class="weather_week--temp"> ${temp[71]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[95]} </div>
      <div class="weather_week--temp"> ${temp[95]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[119]} </div>
      <div class="weather_week--temp"> ${temp[119]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[143]} </div>
      <div class="weather_week--temp"> ${temp[143]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[167]} </div>
      <div class="weather_week--temp"> ${temp[167]}°C </div>
    </div>              
    `;
  }
}
