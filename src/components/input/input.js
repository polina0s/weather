class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = document.querySelector(".modal");
  }

  addListenerForInput() {
    this.cityInput.addEventListener("input", () => {});
  }
}

export { Input };
