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
}

const modal = new Modal();

export { modal };
