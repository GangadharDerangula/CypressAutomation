class addCustomerObject{
    // add Customer Object methods and variablesS
    clickaddCustomerButton(){
        return cy.xpath('//button[@ng-click="addCust()"]')
    }
}
// creating object of the above class
const addCustomer = new addCustomerObject()


// Custom Command for ---> Clicking an addCustomer Button
Cypress.Commands.add("clickOnAddCustomerButton",()=>{
    // Click on Add Customer Button
    addCustomer.clickaddCustomerButton().click()
})

// Custome Command for -----> Entering FirstName,LastName,Post code
Cypress.Commands.add("fillOutCustomerDetails",(firstName,lastName,postCode)=>{
    cy.xpath('//input[@placeholder="First Name"]').type(firstName)
    cy.xpath('//input[@placeholder="Last Name"]').type(lastName)
    cy.xpath('//input[@placeholder="Post Code"]').type(postCode)
})

// Custome Command for ----> Submit addCustomer button
Cypress.Commands.add("submitAddCustomerButton",()=>{
    // submit add customer 
    cy.xpath("//button[@type='submit']").click()
    // verify alert message
    cy.on("window:alert",(text)=>{
        expect(text).to.contains("Customer added successfully with customer id")
    })
})

export default addCustomerObject