describe("Using Cutome Commands", () => {
    beforeEach(function() {
        cy.swaglabsLogin()
    })
    it("Login into swaglabs page", () => {
        
    })
    it("Verify home page products length", () => {

        // length of home page products length
        cy.get(".inventory_item_name").should("have.length",6)
    })
})