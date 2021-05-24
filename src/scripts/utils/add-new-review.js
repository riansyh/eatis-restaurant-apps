import RestaurantSource from '../data/restaurant-source';

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
      RestaurantSource.addReview(newReview);
    });
  },
};

export default addNewReview;
