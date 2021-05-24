import CONFIG from '../../global/config';
import { categoriesList, menuList, reviewCards } from './detail-creator';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail">
    <div class="restaurant-photo">
        <img src="${CONFIG.BASE_IMAGE_URL}medium/${
  restaurant.pictureId
}"  alt="${restaurant.name}"></img>
    </div>  
    <div class="details">
        <h2 class="restaurant__name">${restaurant.name}</h2>
        <div class="restaurant__categories">
            ${categoriesList(restaurant.categories)}
        </div>
        <div class="restaurant__address">
            <img src="./logo/location.svg" alt="logo location pin" class="location-logo" />
            <p class="address">${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div class="restaurant__rating">
            <img src="./logo/star.svg" alt="logo star" class="star-logo" />
            <p class="rating">${restaurant.rating}</p>
        </div>
    </div>
</div>

<h2 class="menus__title">Menus</h2>
<div class="restaurant-menus">
  <div class="foods">
    <h3 class="foods__title">Foods</h3>
    <ul class="foods__list">
        ${menuList(restaurant.menus.foods)}
    </ul>
    <img src="./images/foods.png" alt="food ilustration">
  </div>
  
  <div class="drinks">
    <h3 class="drinks__title">Drinks</h3>
    <ul class="drinks__list">
      ${menuList(restaurant.menus.drinks)}
    </ul>
    <img src="./images/drinks.png" alt="drink ilustration">
  </div>
</div>
  
<h2 class="customer-review__title">Customer Review</h2>
  <div class="customer-reviews">
    ${reviewCards(restaurant.customerReviews)}
  </div>
  `;

const createRestaurantCard = (restaurant) => `
  <div class="resto-item">
    <h3 class="resto-item__location-tag">${restaurant.city}</h3>
    <div class="resto-item__photo">
        <img
        src=${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}
        alt="${restaurant.name}}"
        />
    </div>
    <p class="resto-item__rate">⭐ ${restaurant.rating}</p>
    <div class="content">
        <h3 class="resto-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="resto-item__desc">
        ${restaurant.description}
        </p>
    </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createNewReview = () => `
<div class="customer-reviews">
<h2 class="add-review__title">Add New Review</h2>
<div class="review-form">
  <div class="input-form">
    <div class="review-form__header">
        <label for="name">Name</label> <br>
        <input type="text" name="name" id="reviewerName" />
    </div>

    <div class="review-form__main">
        <label for="content">Review</label> <br>
        <textarea name="content" id="reviewContent"></textarea>
    </div>
  </div>
  <button class="submit" id="submit" aria-label="Submit your review now">Submit</button>
</div>
</div>
`;

const createPopupModal = (content) => `
<div class="modal" id="modal">
  <div class="modal__content">
    <p class="modal__text">${content}</p>
  </div>
  <div class="modal__foot">
    <button class="modal__button" id="modal__button">Oke!</button>
  </div>
</div>  
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantCard,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNewReview,
  createPopupModal,
};
