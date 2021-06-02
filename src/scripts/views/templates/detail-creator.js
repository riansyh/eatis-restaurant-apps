const categoriesList = (categories) => {
  let restaurantCategory = '';
  categories.forEach((category) => {
    restaurantCategory += `
      <h4 class="restaurant__category">${category.name}</h4>`;
  });
  return restaurantCategory;
};

const menuList = (foods) => {
  let foodMenu = '';
  foods.forEach((food) => {
    foodMenu += `
    <li>${food.name}</li>
      `;
  });
  return foodMenu;
};

const reviewCards = (reviews) => {
  let customerReview = '';
  reviews.forEach((review) => {
    customerReview += `
    <div class="review-card">
        <div class="review__header">
            <img src="./images/quote.png" alt="quote logo">
            <h3 class="reviewer-name">${review.name}</h3>
            <p class="review-date">${review.date}</p>
        </div>
        <p class="review__main">
            "${review.review}"
        </p>
    </div>      
      `;
  });
  return customerReview;
};

export { categoriesList, menuList, reviewCards };
