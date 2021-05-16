const data = require('./DATA.json');

let html = '';
data.restaurants.forEach((restaurant) => {
  html += `
    <div class="resto-item">
    <h3 class="resto-item__location-tag">${restaurant.city}</h3>
    <div class="resto-item__photo">
        <img
        src=${restaurant.pictureId}
        alt="${restaurant.name}}"
        />
    </div>
    <p class="resto-item__rate">Rating: ${restaurant.rating}</p>
    <div class="content">
        <h3 class="resto-item__title"><a href="#">${restaurant.name}</a></h3>
        <p class="resto-item__desc">
        ${restaurant.description}
        </p>
    </div>
    </div>      
  `;
  document.querySelector('#restaurant').innerHTML = html;
});
