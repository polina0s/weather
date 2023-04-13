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
}

const modal = new Modal;

export { modal };