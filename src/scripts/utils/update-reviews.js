import RestaurantSource from '../data/restaurant-source';
import { reviewCards } from '../views/templates/detail-creator';

const updateReview = {
  async update(id) {
    const reviewContanier = document.querySelector('#customerReview');
    const restaurant = await RestaurantSource.detailRestaurant(id);
    reviewContanier.innerHTML = reviewCards(restaurant.customerReviews);
  },
};

export default updateReview;
