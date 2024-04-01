describe("Using Fixtures Concept", () => {
    let data;
    beforeEach(function() {
        cy.fixture("orangehrm").then(function(value) {
            data = value;
            cy.visit(data.URL)
        })
    })
    it("Using Fixture function", () => {
        // userName input
        cy.get("[name='username']").type(data.Username)
        // password input
        cy.get("[name='password']").type(data.Password)
        // Login button Click
        cy.get("[type='submit']").click()
    })
})