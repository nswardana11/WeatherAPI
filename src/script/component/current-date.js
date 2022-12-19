
class CurrentDate extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let now = new Date();
    this.date = dateBuilder(now);

    function dateBuilder (d) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      return `${day}, ${date} ${month} ${year}`;
    }

    this.shadowDOM.innerHTML = `
    <Style>
    #center {
    margin: auto;
    text-align: center;
    margin-top: 30px
    }
    
    .clock {
      font-family: sans-serif;
      color: white;
      font-size: 28px;
    }
  
    
    .clock .date {
      margin: auto;
    }
    </Style>
    
    <div id="center" >
      <div class="clock" class="date">${this.date}</div>
    </div>
    `;
  }
}

customElements.define('current-date', CurrentDate);
