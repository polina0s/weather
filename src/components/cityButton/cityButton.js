import { modal } from "../modal/modal";
class CityButton {
  constructor(data) {
    this.createCityButton({ country: data.country, name: data.name });
    this.modal = modal;
  }

  createCityButton({ country, name }) {
    this.element = document.createElement("button");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>`;

    this.element.addEventListener("click", () => {
      console.log(name);
      this.modal.removeActiveClass();
    });
  }
}

export { CityButton };
