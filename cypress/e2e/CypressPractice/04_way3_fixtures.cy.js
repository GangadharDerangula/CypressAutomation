const testValue = require("../../fixtures/orangehrm.json");
describe("Using Fixture Concept", () => {
    it("assing fixture path to creating varibale", () => {
        // Launch page
        cy.visit(testValue.URL)
        // userName input
        cy.get("[name='username']").type(testValue.Username,{log:false})
        // password input
        cy.get("[name='password']").type(testValue.Password,{log:false})
        // Login button Click
        cy.get("[type='submit']").click()
    })

})