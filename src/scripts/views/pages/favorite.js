import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { hideLoading, showLoading } from '../../utils/loader-initiator';
import { createRestaurantCard } from '../templates/template-creator';

const favorite = {
  async render() {
    showLoading();
    return `
    <section class="content">
    <div class="katalog">
        <h1 class="katalog__title favorite">Your Favorite Restaurant</h1>
        <div class="restaurant" id="restaurant"></div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
    });
    hideLoading();
  },
};

export default favorite;
