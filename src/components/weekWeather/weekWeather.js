import { NEXT_DAY } from '../../config/config';

export class WeekWeather {
  createWeekWeatherElement(time, temp) {
    this.element = document.createElement('div');
    this.element.classList.add('week-weather');

    this.element.innerHTML = `
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY]
      } <br> <span class="week-weather__day--temp"> ${
      temp[NEXT_DAY]
    }°C </span ></div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY * 2]
      } <br> <span class="week-weather__day--temp">${
      temp[NEXT_DAY * 2]
    }°C </span> </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY * 3]
      } <br> <span class="week-weather__day--temp">${
      temp[NEXT_DAY * 3]
    }°C </span> </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY * 4]
      } <br> <span class="week-weather__day--temp">${
      temp[NEXT_DAY * 4]
    }°C </span> </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY * 5]
      } <br> <span class="week-weather__day--temp"> ${
      temp[NEXT_DAY * 5]
    }°C </span> </div>
    </div>  
    <div class="week-weather__el">
      <div class="week-weather__day"> ${
        time[NEXT_DAY * 6]
      } <br> <span class="week-weather__day--temp"> ${
      temp[NEXT_DAY * 6]
    }°C </span> </div>
    </div>            
    `;
  }

  endTransition() {
    setTimeout(() => {
      this.element.classList.add('week-weather--end');
    }, 10);
  }
}
