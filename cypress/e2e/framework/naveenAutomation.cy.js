
describe("Register Page Validation",function() {
    beforeEach(function() {
        cy.visit("https://naveenautomationlabs.com/opencart/")
        cy.fixture("naveenAutoData").then((data) => {
            this.d = data
        })
    })

    it("Validate Register Page",function() {
        // Click on my Accounct 
        cy.clickOnMyAccount()
        // Click On Registration Link
        cy.clickOnRegister()
        // Enter First name
        cy.enterFirstName(this.d.Fname)
        // Enter Last name
        cy.enterlastName(this.d.Lname)
        // Enter Email
        cy.enterEmail(this.d.Email)
        // Enter Mobile Number
        cy.enterMobileNo(this.d.PhoneNo)
        // Enter Password
        cy.enterPassword(this.d.Psw)
        // Enter Confirm Password
        cy.enterConfirmPassword(this.d.Psw)
        // Click on Policy Agreement Checkbox
        cy.clickOnPolicyCheckBox()
        // Click on Continue Button
        cy.clickOnContinueButton()
        // Varify Account Created Successfuly Message is Displayed or not
        cy.varifyAccountCreatedText()
    })
     
})