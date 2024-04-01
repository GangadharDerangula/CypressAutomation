describe("XYZ Bank suite",()=> {
    beforeEach(function(){
        cy.fixture("object").then((test)=>{
            this.data = test
            // Launching the website
            cy.launchWebsite(this.data.url)
            
        })
    })
        
    it.only("Click On Manager Login Button",function(){
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
        
    
    })

    it.skip("Click On Add Customer Button",function(){
        // Click on manager login button
        cy.clickOnManagerLoginButton()
        // click on add Customer button
        cy.clickOnAddCustomerButton()
        // fill out the Customer Details fristname,lastname,post code
        cy.fillOutCustomerDetails(this.data.first_name,this.data.last_name,this.data.Post_Code)
        // Submit Add Customer Button and alert verify
        cy.submitAddCustomerButton()
        
    })

    it.skip("Click On Open Account Button", function(){
        // Click on Open Account Button
        cy.clickOnOpenAccountButton()
        // select from  open account dropdowns
        cy.selectOpenAccountDropdowns()
        // Click on submit process Button
        cy.clickOnProcessButton()
        // Vefiy alert message
    })

    it.skip("Click on Customer Button",()=>{
        // click on customer button
        cy.clickOnCustomerButton()
        // check taht we are in customer Page
        cy.verifyCustomerName()
        // Click on Home Button
        cy.clickOnHomeButton()

    })


})