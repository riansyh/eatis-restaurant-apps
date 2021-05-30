import RestaurantSource from '../data/restaurant-source';
import modalInitiator from './modal-initiator';
import updateReview from './update-reviews';

const addNewReview = {
  post(url) {
    const submitButton = document.querySelector('#submit');
    const reviewerName = document.querySelector('#reviewerName');
    const reviewContent = document.querySelector('#reviewContent');

    submitButton.addEventListener('click', () => {
      const newReview = {
        id: url.id,
        name: reviewerName.value,
        review: reviewContent.value,
      };
      const isEmpty = this._checkValue(reviewerName.value, reviewContent.value);
      if (!isEmpty) {
        RestaurantSource.addReview(newReview);
        updateReview.update(url.id);
      } else {
        modalInitiator.init({
          modalContainer: document.querySelector('#modalContainer'),
          status: 'empty',
          reload: false,
        });
      }
    });
  },

  _checkValue(name, content) {
    let error = false;
    if (name === '' || content === '') {
      error = true;
    }
    return error;
  },
};

export default addNewReview;
