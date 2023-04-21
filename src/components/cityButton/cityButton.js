class CityButton {
  constructor(data) {
    this.createCityButton({ country: data.country, name: data.name });
  }

  createCityButton({ country, name }) {
    this.element = document.createElement("div");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<button class="modal-button">
      <div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>
      </button>`;
  }

  addListenerForButton() {
    this.element.addEventListener("click", () => {
      console.log(1111111);
    });
  }
}

export { CityButton };
