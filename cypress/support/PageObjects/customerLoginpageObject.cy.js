class customerLogin{
    customerLoginButton(){
        return cy.xpath('//button[@ng-click="customer()"]')
    }
    yourNameDropdown(){
        return cy.xpath('//select[@id="userSelect"]')
    }
    clickOnLoginButton(){
        return cy.xpath('//button[@class="btn btn-default"]')
    }
}
const LoginObj = new customerLogin()
export default customerLogin

// custom command for Login Button ----> Login Button
Cypress.Commands.add("clickOncustomerLoginButton",()=>{
    // Click On Customer Login Button
    LoginObj.customerLoginButton().click()
})

// select from Your Name Dropdown
Cypress.Commands.add("selectFromYourNameDropdown",()=>{
    LoginObj.yourNameDropdown().select("Lina Jacobson")

})

// Custom Command for ----> Login Button
Cypress.Commands.add("clickOnLoginButton",()=>{
    LoginObj.clickOnLoginButton().click()
})