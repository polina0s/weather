import { NEXT_DAY } from '../../config/config';

export class WeekWeather {
  createWeekWeatherElement(time, temp) {
    this.element = document.createElement('div');
    this.element.classList.add('week-weather');

    this.element.innerHTML = `
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY]} <br> ${
      temp[NEXT_DAY]
    }°C </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY * 2]} <br> ${
      temp[NEXT_DAY * 2]
    }°C </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY * 3]} <br> ${
      temp[NEXT_DAY * 3]
    }°C </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY * 4]} <br> ${
      temp[NEXT_DAY * 4]
    }°C </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY * 5]} <br> ${
      temp[NEXT_DAY * 5]
    }°C </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${time[NEXT_DAY * 6]} <br> ${
      temp[NEXT_DAY * 6]
    }°C </div>
    </div>            
    `;
  }

  endTransition() {
    setTimeout(() => {
      this.element.classList.add('week-weather--end');
    }, 10);
  }
}
