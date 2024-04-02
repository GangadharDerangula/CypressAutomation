class withDrawal{
    clickOnWithDrawlButton(){
        return cy.xpath('//button[@ng-click="withdrawl()"]')
    }
    withdrawnField(){
        return cy.xpath('//input[@placeholder="amount"]')
    }
    submitBttonn(){
        return cy.xpath('//button[@type="submit"]')
    }
    logOut(){
        return cy.xpath('//button[@ng-show="logout"]',{timeout:5000})
    }

}
let withDrawlObj = new withDrawal()
export default withDrawal

// Custom Command for  ---> withdrawl button
Cypress.Commands.add("clickOnWithdrawlButton",()=>{
    // Click on withdrawl Button
    withDrawlObj.clickOnWithDrawlButton().click()
})

// Custom Command for ----> withdrawn field
Cypress.Commands.add("fillOutWithdrawnField",(amount)=>{
    // Enter the amount in the withdrawn field
    withDrawlObj.withdrawnField().type(amount)
})

// Custom Command for ------> submit withDrawn button
Cypress.Commands.add("submitWithdrawButton",()=>{
    // submit Withdraw Button
    withDrawlObj.submitBttonn().click({force:true})
})

// Custom Command for verify message
Cypress.Commands.add("verifyMessage",()=>{
    cy.contains("Transaction successful").should("be.visible")
})

// Custom Command for ---> LogOut
Cypress.Commands.add("clickOnLogOutButton",()=>{
    // Click On Log Out Button
    withDrawlObj.logOut().click()
})