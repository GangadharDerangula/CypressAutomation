describe("Validate Auto Registration", () => {
    it("Registratio Validate", () => {
        // Launch page
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        // Click on Registration Link
        cy.get("#loginPanel>p:nth-child(3)>a").click()
        cy.get('input[id="customer.firstName"]')
        cy.get('input[id="customer.lastName"]')
        cy.get('input[id="customer.street"]')
        cy.get('input[id="customer..city"]')
        cy.get('input[id="customer.state"]')
        cy.get('input[id="customer..zipCode"]')
        cy.get('input[id="customer.phoneNumber"]')
        cy.get('input[id="customer.ssn"]')
        cy.get('input[id="customer.username"]')
        cy.get('input[id="customer.password"]')
        cy.get('#repeatedPassword')
        cy.get('[colspan="2"] > .button').click()
    })
})