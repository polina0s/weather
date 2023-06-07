import { weather, weatherImages } from '../../config/weathercodes';

export class CurrentWeather {
  createCurrentWeatherElement({ weathercode, temperature, name }) {
    this.element = document.createElement('div');
    this.element.classList.add('cur-weather');

    this.element.innerHTML = `
    <div class="cur-weather__name">${name}</div>
    <div class="cur-weather__img-cont">
      <img class="cur-weather__img" src="/src/pictures/${weatherImages[weathercode]}.png" alt="weather" />
    </div>
    <div class="cur-weather__temp">${temperature}°C</div>
    <div class="cur-weather__descrip">${weather[weathercode]}</div>`;
  }

  endTransition() {
    setTimeout(() => {
      this.element.classList.add('cur-weather--end');
    }, 10);
  }

  // startLoading() {
  //   console.log('load...');
  //   const d = document.querySelector('.preload-cont');
  //   console.log(d);
  //   d.innerHTML = `<img src="/src/pictures/preload.gif", alt="34" class="preload-cont__img" />`;
  //   d.classList.add('preload-cont--end');
  // }

  // endLoading() {
  //   console.log('loaded!');
  //   const d = document.querySelector('.preload-cont');
  //   d.classList.remove('preload-cont--end');
  //   // d.innerHTML = '';
  // }
}
