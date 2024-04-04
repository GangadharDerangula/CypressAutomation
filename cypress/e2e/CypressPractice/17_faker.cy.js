describe("Using Faker for generating fake data",function(){
    it("Generate Random Data for Register",()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.generaterFakeUserData().then(userData => {
            // Enter First Name
            cy.get('#input-firstname').type(userData.firstName)
            // Enter Last Name
            cy.get('#input-lastname').type(userData.lastName)
            // Enter Email
            cy.get('#input-email').type(userData.email)
            // Enter telephone number
            cy.get('#input-telephone').type(userData.telephone)
            // Enter Password
            cy.get('#input-password').type(userData.psw)
            // Confirm password
            cy.get('#input-confirm').type(userData.psw)
            
        })
        
    })
})