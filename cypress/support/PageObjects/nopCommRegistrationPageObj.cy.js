class registration{
    register(){
        return cy.xpath('//a[@class="ico-register"]')
    }
    gender(){
        return cy.xpath('//input[@id="gender-male"]')
    }
    firstName(Fname){
        return cy.xpath('//input[@id="FirstName"]')
    }
    lastName(Lname){
        return cy.xpath('//input[@id="LastName"]')
    }
    day(){
        return cy.xpath('//select[@name="DateOfBirthDay"]')
    }
    month(){
        return cy.xpath('//select[@name="DateOfBirthMonth"]')
        
    }
    year(){
        return cy.xpath('//select[@name="DateOfBirthYear"]',)
    }
    email(mail){
        return cy.xpath('//input[@id="Email"]')
    }
    companyName(CName){
        return cy.xpath('//input[@name="Company"]')
    }
    password(psw){
        return cy.xpath('//input[@id="Password"]')
    }
    confirmpsw(cpsw){
        return cy.xpath('//input[@name="ConfirmPassword"]')
    }
    registerButton(){
        return cy.xpath('//button[@id="register-button"]')
    }

}
let registerObj = new registration()
export default registration

// Custom Command for --------> Registration
Cypress.Commands.add("clickOnRegister",()=>{
    // Click On Register Link
    registerObj.register().click({force:true})
})

// Custom Command for ----> selecting Gender
Cypress.Commands.add("selectGendertype",function(){
    // Select Gender type
    registerObj.gender().click()
})

// Custom Command for ----> Personal Details
Cypress.Commands.add("fillOutPersonalDetails",function(Fname,Lname,mail){
    // Enter First Name
    registerObj.firstName().type(Fname,{log:false})
    // Enter Last Name
    registerObj.lastName().type(Lname,{log:false})
    // selecting Day,month and year, Email
    registerObj.day().select('6')
    registerObj.month().select("June")
    registerObj.year().select('1998')
    registerObj.email().type(mail,{log:false})
})

// Custom Command for ------> Company Details
Cypress.Commands.add("enterCompanyName",function(CName){
    // Enter Company name 
    registerObj.companyName().type(CName)
    
})

// Custom Command for ----> Passowrd
Cypress.Commands.add("EnterPassword",function(psw){
    // Enter Password
    registerObj.password().type(psw,{log:false})
})

// Custom Command for ----> Confirm Passowrd
Cypress.Commands.add("ConfirmPassword",(cpsw)=>{
    // Enter Confirm Password
    registerObj.confirmpsw().type(cpsw,{log:false})
})

// Custom Command for ------> Register Button
Cypress.Commands.add("clikOnRegisterButton",()=>{
    // Click on the Register Button
    registerObj.registerButton().click()
})

// Custom Command for ----> Verify register Message
Cypress.Commands.add("verifyRegisterMessage",()=>{
    // Verify message
    cy.contains('Your registration completed',{matchCase:false}).should("be.visible")
})

// Click On Continue Button
Cypress.Commands.add("clickOnContinueButton",()=>{
    cy.contains("Continue").click()
})