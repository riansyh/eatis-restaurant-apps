import RestaurantSource from '../../data/restaurant-source';
import showErrorPage from '../../utils/error-page-initiator';
import { hideLoading, showLoading } from '../../utils/loader-initiator';
import {
  createRestaurantCard,
  createSkipToContent,
} from '../templates/template-creator';

const home = {
  async render() {
    showLoading();
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Come & Eat the Delicious Food</h1>
          <p class="hero__tagline">It’s easy to find great restaurant here!</p>
        </div>
      </div>

      <div class="welcome">
        <div class="container">
          <img src="./images/ilustrasi.png" alt="Ilustrasi orang dan makanan" />
          <div class="text">
            <h2 class="welcome__title">
              Welcome to <span class="highlight">Eaties</span> <br />
              where the food make you feel greater
            </h2>
            <p class="welcome__desc">
              Explore all available restaurant easily and you can get so many
              insight about the restaurant here
            </p>
          </div>
        </div>
      </div>    

      <section class="content">
        <div class="katalog">
          <h1 class="katalog__title">Explore Restaurant</h1>
          <div class="restaurant" id="restaurant"></div>
        </div>
      </section>              
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant');
    const skipContainer = document.querySelector('#skipToContent');
    skipContainer.innerHTML = createSkipToContent('#restaurant');

    try {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      showErrorPage(error);
    }
    hideLoading();
  },
};

export default home;
