import CONFIG from '../../global/config';
import { categoriesList, menuList, reviewCards } from './detail-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createOpening = () => `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Come & Eat the Delicious Food</h1>
          <p class="hero__tagline">It’s easy to find great restaurant here!</p>
        </div>
      </div>

      <div class="welcome">
        <div class="container">
          <img src="./images/ilustrasi.png" width="300px" height="252px" alt="Ilustrasi orang dan makanan" />
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
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <div class="restaurant-photo">
            <img src="${CONFIG.BASE_IMAGE_URL}medium/${
  restaurant.pictureId
}"  alt="${restaurant.name}"></img>
        </div>  
        <div class="details">
            <h1 class="restaurant__name">${restaurant.name}</h1>
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
      <div class="customer-reviews" id="customerReview">
        ${reviewCards(restaurant.customerReviews)}
      </div>
  `;

const createRestaurantCard = (restaurant) => `
  <div class="resto-item" onclick="window.location.href='/#/detail/${restaurant.id}'">
    <h3 class="resto-item__location-tag">${restaurant.city}</h3>
    <div class="resto-item__photo">
        <img
        class="lazyload"
        src="./placeholder.svg"
        data-src=${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}
        alt="${restaurant.name}}"
        height="200px"
        width="100%"
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
    <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>
  </div>
  </div>
`;

const createPopupModal = (data) => `
  <div class="modal" id="modal">
    <div class="modal__content">
      <div class="modal__body">
        <h2 class="${data.color}">${data.title}</h2>
        <p>${data.content}</p>
      </div>
      <button class="modal__button" id="modalButton">Oke!</button>
    </div>
  </div>  
`;

const createErrorPage = (errorMessage) => `
  <div class="error-container">
    <img src="./logo/error.svg" alt="error logo">
    <h2 class="error__title">Oops, something went wrong</h2>
    <p class="error__message">${errorMessage}</p>
  </div>
`;

const createEmptyFavorite = () => `
  <div class="empty-container">
    <h3 class="empty-alert">Sorry...</h3>
    <p class="empty-message">You didn't favorited any restaurants yet</p>\
    <a href="/">Add Restaurant</a>
  </div>
`;

const createSkipToContent = (content) => `
  <a href="${content}" class="skip-link">Skip to konten</a>
`;

const createSkeletonCard = () => `
  <div class="resto-item no-shadow no-hover">
      <div class="resto-item__photo-sk skeleton-loading">
      </div>
      <div class="content margin-top">
      <div class="text-box half XS skeleton-loading"></div>  
        <div class="text-box L full skeleton-loading"></div>
        <div class="text-box three-quarter skeleton-loading"></div>
        <div class="text-box half skeleton-loading"></div>  
      </div>
    </div>
`;

const multiSkeletonCard = () => {
  let html = '';
  for (let idx = 0; idx < 20; idx += 1) {
    html += createSkeletonCard();
  }
  return html;
};

const skeletonHome = () => `
  <div class="hero-skeleton skeleton-loading"></div>
  <div class="container-skeleton">
    <div class="illustration-home skeleton-loading"></div>
    <div class="text-skeleton">
      <div class="text-box L full skeleton-loading"></div>
      <div class="text-box L three-quarter skeleton-loading"></div>
      <div class="text-box L half skeleton-loading"></div>  
      <div class="text-box S full skeleton-loading"></div>  
    </div>
  </div>

  <section class="content">
    <div class="katalog">
      <div class="katalog__title-sk skeleton-loading"></div>
      <div class="restaurant">
        ${multiSkeletonCard()}
      </div>
    </div>
  </section>                
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantCard,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNewReview,
  createPopupModal,
  createErrorPage,
  createEmptyFavorite,
  createSkipToContent,
  createOpening,
  skeletonHome,
};
