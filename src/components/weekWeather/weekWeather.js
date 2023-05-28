class WeekWeather {
  constructor() {
    this.createWeekWeatherElement();
  }

  createWeekWeatherElement() {
    this.element = document.createElement("div");
    this.element.classList.add("weather_week");

    this.element.innerHTML = `
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>
    <div class="weather_week--el">
      <div class="weather_week--day"> mon </div>
      <div class="weather_week--temp"> 12 </div>            
    `;
  }
}
