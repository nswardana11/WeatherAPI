import './city-item.js';

class cityList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set cities(cities) {
    this._cities = cities;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._cities.forEach(city => {
      const cityItemElement = document.createElement('city-item');
      cityItemElement.city = city;
      this.shadowDOM.appendChild(cityItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {

          font-weight: lighter;
          color: #FFF;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('city-list', cityList);
