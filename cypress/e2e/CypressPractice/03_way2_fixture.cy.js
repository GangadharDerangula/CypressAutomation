import testData from "../../fixtures/orangehrm.json" 
describe("Using Fixture Concept", () => {
    it("import testData from fixtures", () => {
        // Launch page
        cy.visit(testData.URL)
        // userName input
        cy.get("[name='username']").type(testData.Username,{log:false})
        // password input
        cy.get("[name='password']").type(testData.Password,{log:false})
        // Login button Click
        cy.get("[type='submit']").click()
    })

})