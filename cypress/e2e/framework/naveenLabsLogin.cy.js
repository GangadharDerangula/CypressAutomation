describe("Naveen Automation Labs Login Page",()=> {
    before(function() {
        // visit the webpage
        cy.visit(Cypress.env("URL"))
        cy.fixture("naveenAutoData").then((data)=> {
            this.d = data
        })
    })
    it("Validation of the Login Page", function() {
        // Click On MyAccount Button
        cy.clickOnMyAccount()
        // Click on Login in the header
        cy.clickOnLogin()
        // Enter Email
        cy.enterEmail(this.d.Email)
        // Enter Password
        cy.enterPassword(this.d.Psw)
        // Click On Login Submit Button
        cy.clickOnLoginButton()
    })
})