context(
  "Verify Login as Standard User, products added to cart and checkout",
  () => {
    beforeEach(() => {
      cy.visit("/");
      cy.loginAndAddtoCart("standard_user");
    });

    const checkoutAction = () => {
      cy.get("#shopping_cart_container").should("have.text", 3).click();
      cy.get(".cart_list .cart_item").should("have.length", 3);
      cy.get('[data-test="checkout"]').click();
    };

    const contactInformation = () => {
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="lastName"]').type("Kalidass");
      cy.get('[data-test="postalCode"]').type("625531");
      cy.get('[data-test="continue"]').click();
    };

    it("Validate Add 3 products to Cart and checkout", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="finish"]').click();
      cy.get(".title").should("have.text", "Checkout: Complete!");
      cy.get(".complete-header").should(
        "have.text",
        "Thank you for your order!"
      );
    });

    it("Validate Add 3 products to Cart and checkout and going back to products page", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="finish"]').click();
      cy.get(".title").should("have.text", "Checkout: Complete!");
      cy.get(".complete-header").should(
        "have.text",
        "Thank you for your order!"
      );
      cy.get('[data-test="back-to-products"]').click();
      cy.get(".title").should("have.text", "Products");
    });

    it("Validate Continue checkout without entering information", () => {
      checkoutAction();
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: First Name is required"
      );
    });

    it("Validate Continue checkout without entering Last name and Zipcode", () => {
      checkoutAction();
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: Last Name is required"
      );
    });

    it("Validate Continue checkout without entering Zipcode", () => {
      checkoutAction();
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="lastName"]').type("Kalidass");
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: Postal Code is required"
      );
    });

    it("Validate Add 3 products to Cart and checkout, then cancelling order", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="cancel"]').click();
      cy.get(".title").should("have.text", "Products");
    });

    it("Validate Add more than one product and remove the product on Cart page", () => {
      cy.get("#shopping_cart_container").click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get(".cart_list .cart_item").should("have.length", 2);
    });

    it("Validate Add more than one product and remove the product on products page", () => {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get("#item_4_title_link")
        .parent()
        .siblings(".pricebar")
        .find("button")
        .should("have.text", "Add to cart");
    });

    it("Validate Add more than one product and remove the product on products page by opening the added product", () => {
      cy.get("#item_0_title_link").click();
      cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get("#inventory_item_container button").should(
        "have.text",
        "Add to cart"
      );
    });

    it("Validate Add more than one product, remove the product on products page, logout and login as Standard_user", () => {
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();
      cy.userLogin("standard_user");
      cy.get("#shopping_cart_container").should("have.text", 3);
    });
  }
);

context(
  "Verify Login as performance_glitch_user, products added to cart and checkout",
  () => {
    beforeEach(() => {
      cy.visit("/");
      cy.loginAndAddtoCart("performance_glitch_user");
    });

    const checkoutAction = () => {
      cy.get("#shopping_cart_container").should("have.text", 3).click();
      cy.get(".cart_list .cart_item").should("have.length", 3);
      cy.get('[data-test="checkout"]').click();
    };

    const contactInformation = () => {
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="lastName"]').type("Kalidass");
      cy.get('[data-test="postalCode"]').type("625531");
      cy.get('[data-test="continue"]').click();
    };

    it("Validate Add 3 products to Cart and checkout", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="finish"]').click();
      cy.get(".title").should("have.text", "Checkout: Complete!");
      cy.get(".complete-header").should(
        "have.text",
        "Thank you for your order!"
      );
    });

    it("Validate Add 3 products to Cart and checkout and going back to products page", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="finish"]').click();
      cy.get(".title").should("have.text", "Checkout: Complete!");
      cy.get(".complete-header").should(
        "have.text",
        "Thank you for your order!"
      );
      cy.get('[data-test="back-to-products"]').click();
      cy.get(".title").should("have.text", "Products");
    });

    it("Validate Continue checkout without entering information", () => {
      checkoutAction();
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: First Name is required"
      );
    });

    it("Validate Continue checkout without entering Last name and Zipcode", () => {
      checkoutAction();
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: Last Name is required"
      );
    });

    it("Validate Continue checkout without entering Zipcode", () => {
      checkoutAction();
      cy.get('[data-test="firstName"]').type("Sivakumar");
      cy.get('[data-test="lastName"]').type("Kalidass");
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: Postal Code is required"
      );
    });

    it("Validate Add 3 products to Cart and checkout, then cancelling order", () => {
      checkoutAction();
      contactInformation();
      cy.get('[data-test="cancel"]').click();
      cy.get(".title").should("have.text", "Products");
    });

    it("Validate Add more than one product and remove the product on Cart page", () => {
      cy.get("#shopping_cart_container").click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get(".cart_list .cart_item").should("have.length", 2);
    });

    it("Validate Add more than one product and remove the product on products page", () => {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get("#item_4_title_link")
        .parent()
        .siblings(".pricebar")
        .find("button")
        .should("have.text", "Add to cart");
    });

    it("Validate Add more than one product and remove the product on products page by opening the added product", () => {
      cy.get("#item_0_title_link").click();
      cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
      cy.get("#shopping_cart_container").should("have.text", 2);
      cy.get("#inventory_item_container button").should(
        "have.text",
        "Add to cart"
      );
    });

    it("Validate Add more than one product, remove the product on products page, logout and login as performance_glitch_user", () => {
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();
      cy.userLogin("performance_glitch_user");
      cy.get("#shopping_cart_container").should("have.text", 3);
    });
  }
);
