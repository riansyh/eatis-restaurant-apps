import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';
import modalInitiator from '../utils/modal-initiator';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(data) {
    try {
      await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'x-api-key': CONFIG.API_KEY,
          'Content-Type': 'application/json',
        },
      });

      modalInitiator.init({
        modalContainer: document.querySelector('#modalContainer'),
        status: 'success',
        reload: true,
      });
    } catch (error) {
      modalInitiator.init({
        modalContainer: document.querySelector('#modalContainer'),
        status: 'fail',
        reload: true,
      });
    }
  }
}

export default RestaurantSource;
