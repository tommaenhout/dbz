/// <reference types="cypress" />

describe("Navbar", () => {
    it("should render the navbar", () => {
        cy.visit("http://localhost:8080");
        cy.get("a").contains("Home");
        cy.get("a").contains("About");
        cy.get("a").contains("Contact");
        cy.get("a").contains("Characters");
    });
});

describe("Navbar Navigation", () => {
    it("should navigate to the about page", () => {
        cy.visit("http://localhost:8080");
        cy.get("a").contains("About").click();
        cy.url().should("include", "/about");
    });
    it("should navigate to the contact page", () => {
        cy.visit("http://localhost:8080");
        cy.get("a").contains("Contact").click();
        cy.url().should("include", "/contact");
    });
    it("should navigate to the characters page", () => {
        cy.visit("http://localhost:8080");
        cy.get("a").contains("Characters").click();
        cy.url().should("include", "/characters");
    });
    it("should navigate to the home page", () => {
        cy.visit("http://localhost:8080");
        cy.get("a").contains("Home").click();
        cy.url().should("include", "/");
    });
    it("should navigate back to the error page and back to the home page", () => {
        cy.visit("http://localhost:8080/838383838j3jeujd");
        cy.get("button.cursor-pointer.rounded.bg-white.text-black.py-2").click();       
        cy.url().should("include", "/");
    });
});

