export class WeekWeather {
  constructor(time, temp) {
    this.createWeekWeatherElement(time, temp);
  }

  createWeekWeatherElement(time, temp) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_week");

    console.log(time, temp);

    this.element.innerHTML = `
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[24]} <br> ${temp[24]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[48]} <br> ${temp[48]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[72]} <br> ${temp[72]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[96]} <br> ${temp[96]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[120]} <br> ${temp[120]}°C </div>
    </div>  
    <div class="weather_week--el">
      <div class="weather_week--day"> ${time[144]} <br> ${temp[144]}°C </div>
    </div>            
    `;
  }
}
