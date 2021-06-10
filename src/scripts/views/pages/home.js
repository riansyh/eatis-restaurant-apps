import RestaurantSource from '../../data/restaurant-source';
import showErrorPage from '../../utils/error-page-initiator';
import { hideSkeleton, showSkeleton } from '../../utils/loader-initiator';
import {
  createOpening,
  createRestaurantCard,
  createSkipToContent,
} from '../templates/template-creator';

const home = {
  async render() {
    showSkeleton();
    return `
      <section class="opening" id="opening">
      </section>
      <section class="content">
        <div class="katalog">
          <h2 class="katalog__title">Explore Restaurant</h2>
          <div class="restaurant" id="restaurant"></div>
        </div>
      </section>              
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant');
    const skipContainer = document.querySelector('#skipToContent');
    const openingContainer = document.querySelector('#opening');
    skipContainer.innerHTML = createSkipToContent('#restaurant');
    openingContainer.innerHTML = createOpening();

    try {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      showErrorPage(error);
    }
    hideSkeleton();
  },
};

export default home;
