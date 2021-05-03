const data = require("./../DATA.json");

let html = "";
data.restaurants.forEach((restaurant) => {
  html += `
    <div class="resto">
    <h3 class="location-tag">${restaurant.city}</h3>
    <div class="foto">
        <img
        src=${restaurant.pictureId}
        alt="Foto ${restaurant.name}}"
        />
    </div>
    <p class="rating">Rating: ${restaurant.rating}</p>
    <div class="content">
        <h3 class="resto-title"><a href="#">${restaurant.name}</a></h3>
        <p class="resto-desc">
        ${restaurant.description.substring(0, 200)}...
        </p>
    </div>
    </div>  
  `;
  document.querySelector("#restos").innerHTML = html;
});
