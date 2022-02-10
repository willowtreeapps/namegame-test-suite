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
    for (let i = 0; i < 3; i++)
      cy.get(".attempts")
        // `cy.get()` yields a JQuery<HTMLElement>, so we can use JQuery functions on the variable.
        .then(($attemptsElement) => {
          cy.log(`Loop Counter: ${i}`);
          const expected = parseInt($attemptsElement.text()) + i;
          cy.get(".photo")
            // `.eq(n)` will yield the `nth` yielded element, if more than one is found.
            .eq(i)
            .click()
            // Cypress occasionally moves too quick and checks before the text value has updated in the UI
            .wait(1000);
          cy.get(".attempts")
            // `cy.should('have.text', foo)` compares the text of the element yielded in `cy.get()` to the expected, in this example `foo`
            .should("have.text", expected);
        });
  });
});
