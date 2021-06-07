/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('.empty-container');
  I.see("You didn't favorited any restaurants yet", '.empty-message');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see("You didn't favorited any restaurants yet", '.empty-message');
  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.resto-item__title a');
  const firstRestaurant = locate('.resto-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantTitle = await I.grabTextFrom('.resto-item__title a');
  assert.strictEqual(likedRestaurantTitle, firstRestaurantTitle);

  I.wait(2);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.empty-container');
  I.see("You didn't favorited any restaurants yet", '.empty-message');
});
