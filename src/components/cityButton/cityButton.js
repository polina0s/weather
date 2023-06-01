class CityButton {
  constructor(data) {
    this.createCityButton({
      country: data.country,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      onClick: data.onClick,
    });
  }

  createCityButton({ country, name, onClick }) {
    this.element = document.createElement('button');
    this.element.classList.add('modal-button');

    this.element.innerHTML = `<div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>`;

    this.element.addEventListener('click', onClick);
  }
}

export { CityButton };
