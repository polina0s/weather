export class Loader {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    this.element = document.createElement('div');
    this.element.classList.add('loader-cont');

    this.element.innerHTML = `<img src="/src/pictures/preload.gif", alt="34" class="loader-cont__img" />`;
  }

  startLoading(el) {
    el.append(this.element);
  }

  endLoading() {
    this.element.remove();
  }
}
