import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { hideLoading, showLoading } from '../../utils/loader-initiator';
import {
  createEmptyFavorite,
  createRestaurantCard,
} from '../templates/template-creator';

const favorite = {
  async render() {
    showLoading();
    window.scrollTo(0, 0);
    return `
    <section class="content">
    <div class="katalog" id="katalog">
        <h1 class="katalog__title favorite">Your Favorite Restaurant</h1>
        <div class="restaurant" id="restaurant"></div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    document.querySelector('#skipToContent').innerHTML = '';

    if (restaurants.length === 0) {
      const katalogContainer = document.querySelector('#katalog');
      katalogContainer.innerHTML += createEmptyFavorite();
    } else {
      try {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
        });
      } catch (error) {
        showLoading(error);
      }
    }
    hideLoading();
  },
};

export default favorite;
