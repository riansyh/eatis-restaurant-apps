/* eslint-disable no-undef */
Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(1);
});

Scenario('add new review to a restaurant', ({ I }) => {
  I.seeElement('.resto-item__title a');
  I.click(locate('.resto-item__title a').first());

  I.seeElement('.review-form');
  I.fillField('name', 'Ryuu-test');
  I.fillField('content', 'Testing for e2e test');

  I.click('#submit');
  I.seeElement('.modal');
  I.click('#modalButton');
  I.see('Ryuu-test', '.reviewer-name');
});
