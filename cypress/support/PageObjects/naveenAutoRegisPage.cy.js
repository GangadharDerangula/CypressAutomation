class registerPage {
    firstName(fname) {
        return cy.get("#input-firstname")
    }

    lastName(lname) {
        return cy.get("#input-lastname")
    }

    email(email) {
        return cy.get("#input-email")
    }

    teliphone(phoneNo) {
        return cy.get("#input-telephone")
    }

    password(psw) {
        return cy.get("#input-password")
    }

    confirmpsw(cpsw) {
        return cy.get("#input-confirm")
    }

    agree() {
        return cy.get('[name="agree"]')
    }

    continueBtn() {
        return cy.get('[type="submit"]')
    }
}

const registerObj = new registerPage()

export default registerPage

// CREATING CUSTOME COMMANDS

// Click on My Account 
Cypress.Commands.add("clickOnMyAccount",()=> {
    cy.get('[title="My Account"]').click()
})
// Click on Register 
Cypress.Commands.add("clickOnRegister",()=> {
    cy.contains("Register").click()
})

Cypress.Commands.add("enterFirstName",(fname)=> {
    // Enter First Name
    registerObj.firstName(fname).type(fname)
    
})

Cypress.Commands.add("enterlastName",(lname)=> {
    // Enter Last Name
    registerObj.lastName(lname).type(lname)
    
})

Cypress.Commands.add("enterEmail",(email)=> {
    // Enter Email
    registerObj.email(email).type(email)
    
})

Cypress.Commands.add("enterMobileNo",(phoneNo)=> {
    // Enter Mobile Number
    registerObj.teliphone(phoneNo).type(phoneNo)
    
})

Cypress.Commands.add("enterPassword",(psw)=> {
    // Enter Password
    registerObj.password(psw).type(psw)
    
})

Cypress.Commands.add("enterConfirmPassword",(cpsw)=> {
    // Enter Confirm Password
    registerObj.confirmpsw(cpsw).type(cpsw)
    
})

Cypress.Commands.add("clickOnPolicyCheckBox",()=> {
    // Click on policy checkbox
    registerObj.agree().click()
})

Cypress.Commands.add("clickOnContinueButton",()=> {
    // Click on Continue Button
    registerObj.continueBtn().click()
})

Cypress.Commands.add("varifyAccountCreatedText", ()=> {
    cy.contains("Your Account Has Been Created!").should('be.visible')
})
