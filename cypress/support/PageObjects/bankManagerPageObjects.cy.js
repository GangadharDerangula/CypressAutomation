class managerPageObjects{
    bankManagerLoginButton(){
        return cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]')
    }
    
     
}
const bankManagerPage = new managerPageObjects()


// Custom Command for ---> Click On Magager Login Button
Cypress.Commands.add("clickOnManagerLoginButton",()=>{
    // Verify manager Login button is visible
    bankManagerPage.bankManagerLoginButton().should("be.visible")
    // Click on Manager Login Button
    bankManagerPage.bankManagerLoginButton().click()
})

// Custom Command for ----> Lanching the web page
Cypress.Commands.add("launchWebsite",(url)=>{
    // Launch website
    cy.visit(url)
    // Assertion check
    cy.url().should('include','/login')
})


export default managerPageObjects