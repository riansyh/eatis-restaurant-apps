import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const detail = {
  async render() {
    window.scrollTo(0, 0);
    return `
      <div id="detail-restaurant" class="detail-container"></div>        
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail-restaurant');
    console.log(restaurant);
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default detail;
