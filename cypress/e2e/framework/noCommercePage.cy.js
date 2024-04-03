describe("noCommerce Page Framework",()=>{
    beforeEach(function(){
        cy.viewport(1200,800)
        cy.fixture("nopCommerceObj").then((u)=>{
            this.d = u
            cy.visit(this.d.url)
        })
    })
    it("Register User Place Order",function(){
        // Click On Register Link
        cy.clickOnRegister()
        // Click On Gender Radio Button
        cy.selectGendertype()
        // Fill Out Personal Details like first,last Name, DateofBirth, email
        cy.fillOutPersonalDetails(this.d.firstName,this.d.lastName,this.d.email)
        // Enter Company Name
        cy.enterCompanyName(this.d.companyName)
        // Enter Password
        cy.EnterPassword(this.d.password)
        // Confirm Password
        cy.ConfirmPassword(this.d.password)
        // Click On Register Button
        cy.clikOnRegisterButton()
        // Verify Registration Message
        cy.verifyRegisterMessage()
        // Click On Continue Button
        cy.clickOnContinueButton()
        
    })

})