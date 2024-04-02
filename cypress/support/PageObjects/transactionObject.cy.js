class transcation{
    clickOnTransactionButton(){
        return cy.xpath('//button[@ng-click="transactions()"]')
    }
    clickOnBackButton(){
        return cy.xpath('//button[@ng-click="back()"]')
    }
}
let transactionObj = new transcation()

export default transcation

// Custom Command for -----> click on transcation Button
Cypress.Commands.add("clickOnTransactionButton",()=>{
    // Click On Transaction Button
    transactionObj.clickOnTransactionButton().click()
})

// Custom Command for ---> Transaction type
Cypress.Commands.add("verifyTransactionType",()=>{
    cy.contains("Transaction Type",{matchCase:false}).should("be.visible")
})

// Custom Command for ----> Back Button
Cypress.Commands.add("clickOnBackButton",()=>{
    // Click On Back Button
    transactionObj.clickOnBackButton().click()
})