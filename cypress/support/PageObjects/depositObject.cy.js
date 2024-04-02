class deposit{
    clikOnDepositButton(){
        return cy.xpath('//button[@ng-click="deposit()"]') 
    }
    amountField(){
        return cy.xpath('//input[@ng-model="amount"]')
    }

    depositSubmitButton(){
        return cy.xpath('//button[@type="submit"]')
    }
}
let depositObj = new deposit()
export default deposit

// Custome Command for ----> Deposit Button
Cypress.Commands.add("clickOnDepositButton",()=>{
    // Click On Deposit Button
    depositObj.clikOnDepositButton().click()
})

// Custom Command for ---> Amout Field
Cypress.Commands.add("fillOutAmoutField",()=>{
    // Enter the amount in the amount field
    depositObj.amountField().type(600)
})

// Custom Command for ----> sumit Deposit Button
Cypress.Commands.add("submitDepositButton",()=>{
    // Click on the submit Deposit Button
    depositObj.depositSubmitButton().click()
})

// Custom Command for ------> Verify Sccessfull Deposit message
Cypress.Commands.add("VerifyDepositSuccessfullMsg",()=>{
    // Get the Successful message
    cy.contains("Deposit Successful",{matchCase:false}).should("be.visible")
})