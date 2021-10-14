/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    // Visit the baseUrl defined in cypress.json
    cy.visit("/");
  });

  afterEach(() => {
    // Due to the use of `localforage` by the Name Game repo, this is how we can clear state after each test, e.g. reset streak/counter/etc.
    indexedDB.deleteDatabase("localforage");
  });

  it("Displays The Correct Title", () => {
    cy.get(".header").should("have.text", "name game");
  });

  it("Increases Attempts Counter After Selecting A Photo", () => {
    cy.get(".attempts").then((initialAttempts) => {
      // `cy.get().eq()` selects the `nth` element yielded by `cy.get()`
      // TestCafe version of this would be: `Selector().nth(0)`
      cy.get(".photo").eq(0).click();
      cy.get(".attempts").should(
        "have.text",
        String(Number(initialAttempts.text()) + 1)
      );
    });
  });
});
