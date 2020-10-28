/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions that the user executes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("The searcher must have the search lyric", () => {
    cy.get(".input").type("Happy Anywhere");
    cy.get(".select").select("Most rated");
    cy.get(".button").click();
    cy.get(".input").should("have.value", "Happy Anywhere");
  });

  it("Click to order by rating to sort the list by rating ascendant or descendant.", () => {
    cy.get(".input").type("Happy Anywhere");
    cy.get(".select").select("Most rated");
    cy.get(".button").click();
    cy.get(".sort-button").click();
  });

  it("Click on the first genre of music to filter the list and get one result", () => {
    cy.get(".input").type("Happy Anywhere");
    cy.get(".select").select("Most rated");
    cy.get(".button").click();
    cy.get(".genres>.pill:nth-child(1)").click();
    cy.get(".tracks-grid").children().should("have.length", 1);
  });

  it("Click on the third genre of music to filter the list and get one result", () => {
    cy.get(".input").type("Happy Anywhere");
    cy.get(".select").select("Most rated");
    cy.get(".button").click();
    cy.get(".genres>.pill:nth-child(3)").click();
    cy.get(".tracks-grid").children().should("have.length", 2);
  });

  it("Get results and do click over a lyric's cover and open the lyric's container, then click on close icon.", () => {
    cy.get(".input").type("Happy Anywhere");
    cy.get(".select").select("Most rated");
    cy.get(".button").click();
    cy.get(".tracks-grid>.track-wrapper:nth-child(1)>.cover").click();
    cy.get(".lyric-wrapper").should("have.class", "show-lyric-container");
    cy.get(".close-lyric").click();
    cy.get(".lyric-wrapper").should("not.have.class", "show-lyric-container");
  });

  it("Write anything on searcher and get text announcing about no content", () => {
    cy.get(".input").type("afwefgw");
    cy.get(".button").click();
    cy.get(".info-text").contains(
      "Wops! We have not find what are you looking for 😅"
    );
  });
});
