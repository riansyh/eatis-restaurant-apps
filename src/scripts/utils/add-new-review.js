import RestaurantSource from '../data/restaurant-source';
import { reviewCards } from '../views/templates/detail-creator';
import modalInitiator from './modal-initiator';

const addNewReview = {
  post(url) {
    const submitButton = document.querySelector('#submit');
    const reviewerName = document.querySelector('#reviewerName');
    const reviewContent = document.querySelector('#reviewContent');

    submitButton.addEventListener('click', async () => {
      let fetchStatus;
      const newReview = {
        id: url.id,
        name: reviewerName.value,
        review: reviewContent.value,
      };
      if (!!newReview.name && !!newReview.review) {
        try {
          const response = await RestaurantSource.addReview(newReview);
          console.log(response);
          const reviewContanier = document.querySelector('#customerReview');
          reviewContanier.innerHTML = reviewCards(response.customerReviews);

          fetchStatus = 'succes';
        } catch (error) {
          fetchStatus = 'fail';
        }
      } else {
        fetchStatus = 'empty';
      }

      this._emptyForm();

      modalInitiator.init({
        modalContainer: document.querySelector('#modalContainer'),
        status: fetchStatus,
        reload: false,
      });
    });
  },

  _emptyForm() {
    document.querySelector('#reviewerName').value = '';
    document.querySelector('#reviewContent').value = '';
  },
};

export default addNewReview;
