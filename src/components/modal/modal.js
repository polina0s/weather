import { doc } from "prettier";
import { CityButton } from "../cityButton/cityButton";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");
  }

  addActiveClass() {
    this.modalWind.classList.add("modal--active");
  }

  removeActiveClass() {
    this.modalWind.classList.remove("modal--active");
  }

  appendCityButton(element) {
    this.modalWind.append(element);
  }

  showModal(data) {
    this.modalWind.innerHTML = "";
    if (data) {
      data?.forEach((data) =>
        this.appendCityButton(new CityButton(data).element)
      );
      this.addActiveClass();
    }
  }
}

const modal = new Modal();

export { modal };
