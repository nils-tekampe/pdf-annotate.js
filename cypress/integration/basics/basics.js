/// <reference types="Cypress" />

describe("Most basic test of adding a comments", function () {
  it("Adding one comment", async () => {
    cy.visit("http://localhost:8080");
    cy.get(".comment").click();
    cy.get("div#viewer.pdfViewer").click(50, 300);

    cy.get("input#pdf-annotate-point-input").type("Testkommentar{enter}").then(() => {
      expect(localStorage.getItem("example.pdf/pen/color")).to.be.not.null;
      expect(localStorage.getItem("example.pdf/annotations")).to.be.not.null;
    });
  });
});

describe("Most basic test of adding a comments", function () {
  it("Adding one comment 2", async () => {
    cy.visit("http://localhost:8080");
    cy.get(".comment").click();
    cy.contains("Permission to make digital").click();

    cy.get("input#pdf-annotate-point-input").type("Testkommentar{enter}").then(() => {
      expect(localStorage.getItem("example.pdf/pen/color")).to.be.not.null;
      expect(localStorage.getItem("example.pdf/annotations")).to.be.not.null;
    });
  });
});
