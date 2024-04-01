describe("Using Cutome Commands", () => {
    
    it("Verify swaglans home page products length", () => {
        // length of home page products length
        cy.verifyProductsLength(6)

        // cy.get(".inventory_item_name").should("have.length",6)
    })
})