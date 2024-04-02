describe("XYZ Bank suite",()=> {
    beforeEach(function(){
        cy.fixture("object").then((test)=>{
            this.data = test
            // Launching the website
            cy.launchWebsite(this.data.url)
            
        })
    })
        
    it("Click On Manager Login Button",function(){
        // Click on manager login button
        cy.clickOnManagerLoginButton()
        // click on add Customer button
        cy.clickOnAddCustomerButton()
        // fill out the Customer Details fristname,lastname,post code
        cy.fillOutCustomerDetails(this.data.first_name,this.data.last_name,this.data.Post_Code)
        // Submit Add Customer Button and alert verify
        cy.submitAddCustomerButton()
        // Click on Open Account Button
        cy.clickOnOpenAccountButton()
        // select from  open account dropdowns
        cy.selectOpenAccountDropdowns()
        // Click on submit process Button and verify alert test
        cy.clickOnProcessButton()
        // click on customer button
        cy.clickOnCustomerButton()
        // check taht we are in customer Page
        cy.verifyCustomerName()
        // Click on Home Button
        cy.clickOnHomeButton()
        // Click On Customer Login Button
        cy.clickOncustomerLoginButton()
        // Select From your Name Dropdown
        cy.selectFromYourNameDropdown()
        // Click on Login Submit Button
        cy.clickOnLoginButton()
        // Click On Transaction Button
        cy.clickOnTransactionButton()
        // Verify Transaction Type
        cy.verifyTransactionType()
        // Click On Back Button
        cy.clickOnBackButton()
        // Click On Deposit Button
        cy.clickOnDepositButton()
        // Fill out Amount field 
        cy.fillOutAmoutField()
        // Submit deposit Button
        cy.submitDepositButton()
        // Verify Deposit Successfull Message
        cy.VerifyDepositSuccessfullMsg()
        // Click On withdrawl Button
        cy.clickOnWithdrawlButton()
        // Enter amount in the field of withdrawn 
        cy.fillOutWithdrawnField(300)
        // Submit Withdraw Button
        cy.submitWithdrawButton()
        // Verify Successful Withdraw Message
        // cy.verifyMessage()
        // Click On LogOut Button
        cy.clickOnLogOutButton()
        // Click on Home Button
        cy.clickOnHomeButton()


    
    })

})
