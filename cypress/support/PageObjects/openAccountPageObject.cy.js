class openAccount{
    clickOnOpenAccounct(){
        return cy.xpath("//button[@ng-click='openAccount()']")
    }
    selectFromCustomerDropdown(){
        return cy.xpath('//select[@id="userSelect"]')
    }
    selectFromCurrencyDropdown(){
        return cy.xpath('//select[@id="currency"]')
    }
    clickOnProcessButton(){
        return cy.xpath('//button[@type="submit"]')
    }
    
}
// creating object
let openAccountObj =  new openAccount()

export default openAccount


// Custome Command for ----> Click on open account button
Cypress.Commands.add("clickOnOpenAccountButton",()=>{
    openAccountObj.clickOnOpenAccounct().click()
})

// Custome Command for ---> select Open Account Details
Cypress.Commands.add("selectOpenAccountDropdowns",()=>{
    // select from Customer Dropdown list
    openAccountObj.selectFromCustomerDropdown().select("Lina Jacobson")
    // select from Currency Dropdown list
    openAccountObj.selectFromCurrencyDropdown().select("Rupee")
})

// Custome Command for -----> Click on open account Process button
Cypress.Commands.add("clickOnProcessButton",()=>{
    // click on process submit button
    openAccountObj.clickOnProcessButton().click()
    // verify alert message
    cy.on("window:alert",(t)=>{
        expect(t).to.contains("Account created successfully with account Number:")
    })
})
