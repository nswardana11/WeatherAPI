import '../component/city-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cityListElement = document.querySelector('city-list');
  
  const onButtonEnterClicked = async () => { 
    try {
      const result = await DataSource.searchCity(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    cityListElement.cities = results;
  };

  const fallbackResult = message => {
    cityListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonEnterClicked;
};

export default main;
