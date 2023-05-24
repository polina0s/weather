import { modal } from "../modal/modal";
import { api } from "../api/api";
import { debounce } from "../debounce/debounce";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.helper = document.querySelector(".modal");

    this.modal = modal;
    this.api = api;

    this.onFocusInput();
    this.onChange();
  }

  async fillHelper(value) {
    let data = await this.api.getCities(value);

    if (data !== undefined) {
      this.modal.showModal(data);
    } else {
      this.modal.removeActiveClass();
    }
  }

  showHelper(value) {
    if (value.length > 1) {
      this.fillHelper(value);
    } else {
      this.modal.clearModal();
      this.modal.removeActiveClass();
    }
  }

  onChange() {
    const debouncedChange = debounce((e) => this.showHelper(e.target.value));
    this.cityInput.addEventListener("input", debouncedChange);
  }

  onFocusInput() {
    this.cityInput.addEventListener("focus", (e) => {
      this.showHelper(e.target.value);
    });
  }

  clearInput() {
    this.cityInput.value = "";
  }
}

export { Input };
