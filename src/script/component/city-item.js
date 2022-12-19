class cityItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set city(city) {
    this._city = city;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .location .city {
        color: #FFF;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    
    .current .temp {
        color: #FFF;
        background-color:rgba(0, 0, 0, 0.6);
        font-size: 102px;
        font-weight: 900;
        margin: 0 0;
        text-shadow: 2px 10px rgba(0, 0, 0, 0.6);
    }
    
    .current .temp span {
        font-weight: 500;
    }
    
    .current .weather {
        color: #FFF;
        font-size: 32px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 2px;
        text-shadow: 0px 3px rgba(0, 0, 0, 0.4);
    }
    </style>
    <div> 
        <img src="http://openweathermap.org/img/wn/${this._city.weather[0].icon}@2x.png" alt="weather-icon">
    </div>
    <section class="location">
        <div class="city">${this._city.name}, ${this._city.sys.country}</div>
    </section>
    <div class="current">
        <div class="temp">${(this._city.main.temp - 273.15).toFixed(0)}<span>°C</span></div>
        <div class="weather">${this._city.weather[0].main}</div>
    </div>
    `
    }
}

customElements.define('city-item', cityItem);