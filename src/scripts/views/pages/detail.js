import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const detail = {
  async render() {
    window.scrollTo(0, 0);
    return `
      <div id="detail-restaurant" class="detail-container"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = (await RestaurantSource.detailRestaurant(url.id))
      || (await FavoriteRestaurantIdb.getRestaurant(url.id));
    const detailContainer = document.querySelector('#detail-restaurant');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default detail;
