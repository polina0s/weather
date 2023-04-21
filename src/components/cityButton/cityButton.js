class CityButton {
  constructor() {
    this.createCityButton({ country: data.country, city: data.city });

    this.cityButton = this.element.querySelector(".modal-button");
  }

  createCityButton({ country, city }) {
    this.element = document.createElement("div");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<div class="modal-button">
      <span class="modal-button--country">${country}</span>
      <span class="modal-button--city">${city}</span>
      </div>`;
  }

  addListenerForButton() {
    this.cityButton.addEventListener("click", () => {
      console.log(1111111);
    });
  }
}

export { cityButton };
