Cypress.Commands.add("userLogin", (username) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("loginAndAddtoCart", (username) => {
  cy.userLogin(username);

  const products = [
    '[data-test="add-to-cart-sauce-labs-backpack"]',
    '[data-test="add-to-cart-sauce-labs-bike-light"]',
    '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
  ];

  products.forEach((value) => {
    cy.get(value).click();
  });
});
