import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantCard } from '../templates/template-creator';

const home = {
  async render() {
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
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default home;