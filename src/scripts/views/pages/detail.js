import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createNewReview,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import addNewReview from '../../utils/add-new-review';

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
    const restaurant = await this._getRestaurantData(url.id);
    const detailContainer = document.querySelector('#detail-restaurant');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    detailContainer.innerHTML += createNewReview();
    addNewReview.post(url);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },

  async _getRestaurantData(url) {
    let restaurant;
    try {
      restaurant = await RestaurantSource.detailRestaurant(url);
    } catch (error) {
      restaurant = await FavoriteRestaurantIdb.getRestaurant(url);
    }
    return restaurant;
  },
};

export default detail;
