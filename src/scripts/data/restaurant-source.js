import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

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
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      body: JSON.stringify(data),
      header: {
        'x-api-key': CONFIG.API_KEY,
        'Content-type': 'application/json',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }
}

export default RestaurantSource;
