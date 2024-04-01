class openAccount{
    clickOnOpenAccounct(){
        return cy.xpath("//button[@ng-click='openAccount()']")
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
    cy.xpath('//select[@id="userSelect"]').select("Harry Potter")
    // select from Currency Dropdown list
    cy.xpath('//select[@id="currency"]').select("Rupee")
})

// Custome Command for -----> Click on open account Process button
Cypress.Commands.add("clickOnProcessButton",()=>{
    // click on process submit button
    cy.xpath('//button[@type="submit"]').click()
    // verify alert message
    cy.on("window:alert",(t)=>{
        expect(t).to.contains("Account created successfully with account Number:")
    })
})
