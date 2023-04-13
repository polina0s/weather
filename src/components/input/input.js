class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = document.querySelector(".modal");

    this.cityInput.addEventListener("input", () => {
      this.modal.classList.add("modal--active");
    });
  }
}

export { Input };
