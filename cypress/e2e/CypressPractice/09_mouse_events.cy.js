describe("Mouse Overs in Cypress", () => {
    it("Mouse events", () => {
        cy.visit("https://practice.expandtesting.com/tooltips")
        // Mouse over event on the element
        cy.get("#btn1").trigger('mouseover') 
    })

    it("mouseover", () => {
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    })

    it("Right Click", () => {
        cy.visit("")
    })
})