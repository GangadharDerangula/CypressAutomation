class customer{
    clickOnCustomerButton(){
        return cy.xpath('//button[@ng-click="showCust()"]')
    }
}
const customerObj = new customer()
export default customer

// custom Command for ----> click on customer button
Cypress.Commands.add("clickOnCustomerButton",()=>{
    // click on customer button
    customerObj.clickOnCustomerButton().click()
})
// Custom command for ----> verify customer name is visible
Cypress.Commands.add("verifyCustomerName",()=>{
    // verify customer first name
    cy.contains("Lina",{matchCase:false}).should("be.visible")
}) 

// Custom Command for ----> Home page URl
Cypress.Commands.add("clickOnHomeButton",()=>{
    // clik on Home Button
    cy.xpath('//button[@ng-click="home()"]').click()
})