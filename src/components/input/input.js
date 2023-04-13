import { modal } from "../modal/modal";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = modal;

    this.addListenerForInput();
  }

  addListenerForInput() {
    this.cityInput.addEventListener(
      "input",
      this.modal.addActiveClass.bind(modal)
    );
  }
}

export { Input };
