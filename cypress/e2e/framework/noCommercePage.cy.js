describe("noCommerce Page Framework",()=>{
    beforeEach(function(){
        cy.viewport(1200,800)
        cy.fixture("nopCommerceObj").then((u)=>{
            this.d = u
            cy.visit(this.d.url)
        })
    })
    it("Register User",function(){
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
        // Select the Agree Check Box
        cy.selectAgreeCheckBox()
        
    })

    it.only("Register User Place Order",()=>{
        // SelectHTC Andriod Phone 
        cy.selectItem()
        // Item into AddtoCart
        cy.itemIntoAddToCart()
        // Go To Shoping Cart
        cy.checkShoppingCart()
        // select the agree Check Box
        cy.selectAgreeCheckBox()
        // Click On Checkout Button
        cy.clickOnCheckoutButton()
    })

})