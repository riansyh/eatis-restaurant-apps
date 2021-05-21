import CONFIG from '../../global/config';

// PERLU DIRAPIHIN
const createRestaurantDetailTemplate = (restaurant) => `
    <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}"></img>
    <p>${restaurant.address}</p>
    <p>${restaurant.categories}</p>
    <p>${restaurant.menus.foods}</p>
    <p>${restaurant.menus.drinks}</p>
    <p>${restaurant.rating}</p>
    <p>${restaurant.customerReviews}</p>
`;

const createRestaurantCard = (restaurant) => `
    <div class="resto-item">
    <h3 class="resto-item__location-tag">${restaurant.city}</h3>
    <div class="resto-item__photo">
        <img
        src=${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}
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

export { createRestaurantDetailTemplate, createRestaurantCard };
