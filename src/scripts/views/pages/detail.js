import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createNewReview,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import addNewReview from '../../utils/add-new-review';
import { hideLoading, showLoading } from '../../utils/loader-initiator';
import showErrorPage from '../../utils/error-page-initiator';

const detail = {
  async render() {
    showLoading();
    window.scrollTo(0, 0);
    return `
      <div id="detail-restaurant" class="detail-container"></div>
      <div id="likeButtonContainer"></div>
      <div id="modalContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await this._getRestaurantData(url.id);
    const detailContainer = document.querySelector('#detail-restaurant');
    try {
      detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      detailContainer.innerHTML += createNewReview();
      addNewReview.post(url);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (error) {
      showErrorPage(error);
    }
    hideLoading();
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
