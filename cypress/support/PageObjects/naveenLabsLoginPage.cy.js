class loginPage {
    login() {
        cy.contains("Login").click()
    }
    email() {
        return cy.get("#input-email")
    }
    password() {
        return cy.get("#input-password")
    }
    submitButton() {
        return cy.get('[type="submit"]')
    }
}
const loginPageObj = new loginPage()
export default loginPage

Cypress.Commands.add("clickOnLogin",()=> {
    // Click on Login Link
    loginPageObj.login()
})

Cypress.Commands.add("enterEmail",(email)=> {
    // Enter email
    loginPageObj.email().type(email,{log:false})
})

Cypress.Commands.add("enterPassword",(psw)=> {
    // Enter Password
    loginPageObj.password().type(psw,{log:false})
})

Cypress.Commands.add("clickOnLoginButton",()=> {
    // Click on Submit Login Button
    loginPageObj.submitButton().click()
})