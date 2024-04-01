// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import testData from "../fixtures/swaglabs.json";

// Creating Custom Command for SWAGlabs Login
Cypress.Commands.add("swaglabsLogin", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")
    cy.get("#user-name").type(testData.userName,{log:false})
    cy.get("#password").type(testData.password,{log:false})
    cy.get("#login-button").click()
})

// Verify the products length on Home Page
Cypress.Commands.add("verifyProductsLength",(len) => {
    cy.swaglabsLogin();
    cy.get(".inventory_item_name").should("have.length",len)

})
// OrangeHRM Login 
Cypress.Commands.add("orangeLogin", (username,password) => {
    cy.session("hrmLogin",() => {
        cy.visit("/web/index.php/auth/login")
        cy.get("[name='username']").type(username,{log:false})
        cy.get("[name='password']").type(password,{log:false})
        cy.get("[type='submit']").click()

    })
})

// iFrame Custom Command
Cypress.Commands.add("iFrame",(frameLoc) => {
    return cy.get(frameLoc)
    .its("0.contentDocument.body")
    .then(cy.wrap)
})

//  ########### Project1 Custom Commands  #############

// first Project  ---> SIGNUP AND DELETE USER
Cypress.Commands.add("registerNewUser_DeleteAccount",(name,email,password) => {
    // Using Fixrue
    const testData = require("../fixtures/project1.json")
    // Launch the page
    cy.visit("https://automationexercise.com/")
    // Verify Home Page
    cy.get(".col-sm-8 li").first().should("be.visible");
    // Click on Signup/Login'button
    cy.get(".col-sm-8 li").eq(3).click()
    // Verify New User Signup! is visible
    cy.contains("New User Signup!").should("be.visible")
    // enter name and email address
    cy.get("[name='name']").type(name,{log:false})
    cy.get("[name='email']").eq(1).type(email,{log:false})
    // Click 'Signup' button
    cy.get("[type='submit']").eq(1).click()
    // Verify that ENTER ACCOUNT INFORMATION is visible
    cy.contains("Enter Account Information").should("be.visible")
    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender1").check()
    cy.get("#name").should("have.value",name)
    cy.get("#email").should("have.value",email)
    cy.get("#password").type(password,{log:false})
    cy.get("#days").select(1)
    cy.get("#months").select("February")
    cy.get("#years").select('1947')
    // Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").check().should("be.checked")
    // Select checkbox 'Receive special offers from our partners!'
    cy.get("#optin").check().should("be.checked")
    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get("#first_name").type(testData.first_name)
    cy.get("#last_name").type(testData.last_name)
    cy.get("#company").type(testData.company)
    cy.get("#address1").type(testData.address1)
    cy.get("#country").select(testData.country)
    cy.get("#state").type(testData.state)
    cy.get("#city").type(testData.city)
    cy.get("#zipcode").type(testData.zipcode)
    cy.get("#mobile_number").type(testData.mobile_number)
    // Click 'Create Account button'
    cy.get("[type='submit']").first().click()
    // Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("ACCOUNT CREATED!",{matchCase:false}).should("be.visible")
    // Click 'Continue' button
    cy.get(".pull-right>a").click()
    // Verify that 'Logged in as username' is visible
    cy.get(".nav.navbar-nav li").last().should("be.visible")
    // Click 'Delete Account' button
    cy.get(".nav.navbar-nav li").eq(4).click()
    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains("ACCOUNT DELETED!",{matchCase:false}).should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
    cy.log("ACCOUNT IS SUCCESSFULLY CREATED AND DELETED")
    
})

// Custom Command for ---> REGISTER_NEW_USER
Cypress.Commands.add("registerNewUser",(Name,Email) => {
    const newdata = require("../fixtures/project1.json");
    // Launch the page
    cy.visit("https://automationexercise.com/")
    // Verify Home Page
    cy.get(".col-sm-8 li").first().should("be.visible");
    // Click on Signup/Login'button
    cy.get(".col-sm-8 li").eq(3).click()
    // Verify New User Signup! is visible
    cy.contains("New User Signup!").should("be.visible")
    // enter name and email address
    cy.get("[name='name']").type(Name,{log:false})
    cy.get("[name='email']").eq(1).type(Email,{log:false})
    // Click 'Signup' button
    cy.get("[type='submit']").eq(1).click()
    // Verify that ENTER ACCOUNT INFORMATION is visible
    cy.contains("Enter Account Information").should("be.visible")
    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender1").check()
    cy.get("#name").should("have.value",Name)
    cy.get("#email").should("have.value",Email)
    cy.get("#password").type(newdata.register.password,{log:false})
    cy.get("#days").select(1)
    cy.get("#months").select("February")
    cy.get("#years").select('1947')
    // Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").check().should("be.checked")
    // Select checkbox 'Receive special offers from our partners!'
    cy.get("#optin").check().should("be.checked")
    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get("#first_name").type(newdata.register.first_name)
    cy.get("#last_name").type(newdata.register.last_name)
    cy.get("#company").type(newdata.register.company)
    cy.get("#address1").type(newdata.register.address1)
    cy.get("#country").select(newdata.register.country)
    cy.get("#state").type(newdata.register.state)
    cy.get("#city").type(newdata.register.city)
    cy.get("#zipcode").type(newdata.register.zipcode)
    cy.get("#mobile_number").type(newdata.register.mobile_number)
    // Click 'Create Account button'
    cy.get("[type='submit']").first().click()
    // click Continue Button
    // cy.get("[data-qa='continue-button']").click()
    // Click LogOut button
    // cy.get(".nav.navbar-nav li").eq(3).click()
        
})

// Custom Command for ----> LOGIN USER
Cypress.Commands.add("LoginUser", (email,password) => {
    // Launch the page
    cy.visit("https://automationexercise.com/")
    // Verify Home Page
    cy.get(".col-sm-8 li").first().should("be.visible");
    // Click on Signup/Login'button
    cy.get(".col-sm-8 li").eq(3).click()
    // Verify 'Login to your account' is visible
    cy.contains("Login to your account",{matchCase:false}).should("be.visible")
    // Enter Email and password
    cy.get("[name='email']").first().type(email,{log:false})
    cy.get("[name='password']").type(password,{log:false})
    //  Click 'login' button
    cy.get("[type='submit']").first().click()
    

})

// Custom Command for -----> Login and Delete Account
Cypress.Commands.add("loginUser_DeleteAccount", (email,password) => {
    // click Continue Button
    cy.get("[data-qa='continue-button']").click()
    // Click LogOut button
    cy.get(".nav.navbar-nav li").eq(3).click()
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    cy.LoginUser(email,password)   // ------> Nested Custom Command
    // 8. Verify that 'Logged in as username' is visible
    cy.contains("Logged in as Virat",{matchCase:false}).should("be.visible")
    // 9. Click 'Delete Account' button
    cy.get(".nav.navbar-nav li").eq(4).click()
    // 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains("ACCOUNT DELETED!",{matchCase:false}).should("be.visible")
    
})

//  INCORRECT LOGIN Message
Cypress.Commands.add("IncorrectLoginMessage",(Email,Password)=> {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter incorrect email address and password
    // 7. Click 'login' button
    cy.LoginUser(Email,Password)
    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains("Your email or password is incorrect!",{matchCase:false}).should("be.visible") 

})

// LOGOUT USER
Cypress.Commands.add("logOutUser", ()=>{
    // click Continue Button
    cy.get("[data-qa='continue-button']").click()
    // Click LogOut button
    cy.get(".nav.navbar-nav li").eq(3).click()
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    const newdata = require("../fixtures/project1.json");
    cy.LoginUser(newdata.Login.email,newdata.Login.password)
    // 8. Verify that 'Logged in as username' is visible
    cy.get(".col-sm-8 li").eq(9).should("be.visible");
    // 9. Click 'Logout' button
    cy.get(".nav.navbar-nav li").eq(3).click()
    // 10. Verify that user is navigated to login page
    // cy.url().should("eq","https://automationexercise.com/login")

})

// Custom Command For ---->  Register User with existing email
Cypress.Commands.add("existingEmail",(password) => {
    // Launch the page
    cy.visit("https://automationexercise.com/")
    // Verify Home Page
    cy.get(".col-sm-8 li").first().should("be.visible");
    // Click on Signup/Login'button
    cy.get(".col-sm-8 li").eq(3).click()
    // 5. Verify 'New User Signup!' is visible
    cy.contains("New User Signup!").should("be.visible")
    // 6. Enter name and already registered email address
    cy.get("[name='name']").type("Gangadhar",{log:false})
    cy.get("[name='email']").eq(1).type(password,{log:false})
    // 7. Click 'Signup' button
    cy.get("[type='submit']").eq(1).click()
    // 8. Verify error 'Email Address already exist!' is visible
    cy.contains("Email Address already exist!",{matchCase:false}).should("be.visible")

})

// Test Case page ------Custom Command
Cypress.Commands.add("verifyTestCasePage",()=> {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Click on 'Test Cases' button
    cy.get(".col-sm-8 li").eq(4).click();
    // 5. Verify user is navigated to test cases page successfully
    // cy.url().should("inlude")
})

// Verify All Products and product detail page
Cypress.Commands.add("productDetails",()=>{
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Click on 'Products' button
    cy.get(".col-sm-8 li").eq(1).click();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.contains("ALL PRODUCTS",{matchCase:false}).should("be.visible");
    // 6. The products list is visible
    cy.log("The products list is visible")
    // 7. Click on 'View Product' of first product
    cy.get("ul>li>[href='/product_details/1']").click()
    // 8. User is landed to product detail page
    cy.go(-1)
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    cy.go(1)
    cy.contains("Blue Top").should("be.visible")
    cy.contains("Category").should("be.visible")
    cy.contains("Rs. 500").should("be.visible")
    cy.contains("Availability").should("be.visible")
    cy.contains("Condition:").should("be.visible")
    cy.contains("Brand:").should("be.visible")

})

// Search Product 
Cypress.Commands.add("productSearch",(pname)=>{
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    cy.get(".col-sm-8 li").eq(1).click();
    cy.contains("ALL PRODUCTS",{matchCase:false}).should("be.visible");
    // 6. Enter product name in search input and click search button
    cy.get("#search_product").first().type(pname)
    cy.get("#submit_search").first().click()
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    cy.contains("Searched Products").should("be.visible")
    // 8. Verify all the products related to search are visible
})

// Verify Subscription in home page
Cypress.Commands.add("subcription",(email)=> {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Scroll down to footer
    // cy.get("#susbscribe_email").scrollIntoView()
    cy.scrollTo("bottom")
    // 5. Verify text 'SUBSCRIPTION'
    cy.contains("Subscription").should("be.visible")
    // 6. Enter email address in input and click arrow button
    cy.get("#susbscribe_email").type(email)
    cy.get("#subscribe").click()
    // 7. Verify success message 'You have been successfully subscribed!' is visible
    cy.contains("You have been successfully subscribed!",{matchCase:false}).should("be.visible")
})

//  Add Products in Cart
Cypress.Commands.add("addToCart",()=>{
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Click 'Products' button
    cy.get(".col-sm-8 li").eq(1).click()
    // 5. Hover over first product and click 'Add to cart'
    cy.get(".productinfo.text-center").eq(0).trigger('mouseover',{force: true})
    cy.get("a[data-product-id='1']").eq(0).click()
    // 6. Click 'Continue Shopping' button
    cy.get(".modal-footer>button").click()
    // 7. Hover over second product and click 'Add to cart'
    cy.get(".productinfo.text-center").eq(1).trigger('mouseover',{force: true})
    cy.get("a[data-product-id='2']").eq(0).click()
    // 8. Click 'View Cart' button
    cy.get("p>a>u",).click({force: true})
    // 9. Verify both products are added to Cart
    cy.log("both products are added to Cart")
    // 10. Verify their prices, quantity and total price
    cy.get("tr td[class='price']").should("be.visible")
    cy.get("tr td[class='quantity']").should("be.visible")
    cy.get("tr td[class='total']").should("be.visible")
})

// Verify Product quantity in Cart
Cypress.Commands.add("checkProductQuatity",()=>{
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Click 'View Product' for any product on home page
    cy.get("ul>li>a[style='color: brown;']").eq(16).click()
    // 5. Verify product detail is opened
    cy.log("product detail is opened")
    // 6. Increase quantity to 4
    const numberOfClicks = 4;
    for(let i = 0; i < numberOfClicks; i++){
        cy.get("#product_id").click({force:true})
    }
    // 7. Click 'Add to cart' button
    cy.get(".btn.btn-default.cart").click()
    // 8. Click 'View Cart' button
    cy.get(".text-center>a>u",).click()
    // 9. Verify that product is displayed in cart page with exact quantity
})

// Custom Command for -------> PAYMENT
Cypress.Commands.add("payment",()=>{
    const newdata = require("../fixtures/project1.json").payment;
    // Enter payment details: Name on Card, Card Number, CVC, Expiration date
    //Click 'Pay and Confirm Order' button
    cy.get('[data-qa="name-on-card"]').type(newdata.name)
    cy.get('[data-qa="card-number"]').type(newdata.cardNo)
    cy.get('[data-qa="cvc"]').type(newdata.cvc)
    cy.get('[data-qa="expiry-month"]').type(newdata.month)
    cy.get('[data-qa="expiry-year"]').type(newdata.year)
    cy.get('[data-qa="pay-button"]').click()

})

// Place Order: Register while Checkout
Cypress.Commands.add("placeOrderWhileCheckout",()=>{
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("https://automationexercise.com/")
    cy.get(".col-sm-8 li").first().should("be.visible");
    // 4. Add products to cart
    cy.get("a[data-product-id='7']").first().click()    
    cy.get('.modal-footer > .btn').click()
    // 5. Click 'Cart' button
    cy.get(".col-sm-8 li").eq(2).click()
    // 6. Verify that cart page is displayed
    cy.log("art page is displayed")
    // 7. Click Proceed To Checkout
    cy.get("div>a").eq(1).click()
    // 8. Click 'Register / Login' button
    cy.get("p>a>u").first().click()
    // 9. Fill all details in Signup and create account
    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    const newdata = require("../fixtures/project1.json");
    cy.registerNewUser(newdata.register.name,newdata.register.email)
    cy.get("[data-qa='continue-button']").click()
    // 11. Verify ' Logged in as username' at top
    cy.get(".col-sm-8 li").eq(9).should("be.visible");
    // 12.Click 'Cart' button
    cy.get(".col-sm-8 li").eq(2).click()
    // 13. Click 'Proceed To Checkout' button
    cy.get("div>a").eq(1).click()
    // 14. Verify Address Details and Review Your Order
    cy.contains("Address Details",{matchCase:false}).should("be.visible")
    cy.contains("Review Your Order",{matchCase:false}).should("be.visible")
    // 15. Enter description in comment text area and click 'Place Order'
    cy.get('.form-control').type(newdata.Description.text)
    cy.get(':nth-child(7) > .btn').click()
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 17. Click 'Pay and Confirm Order' button
    cy.payment()
    // 18. Verify success message 'Your order has been placed successfully!'
    // cy.contains("Your order has been placed successfully!",{matchCase:false}).should("be.visible")
    // 19. Click 'Delete Account' button
    cy.get(':nth-child(5) > a').click()
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.contains("ACCOUNT DELETED!",{matchCase:false}).should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
})

// Place Order: Register before Checkout
Cypress.Commands.add("placeOrderBeforeCheckout", () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click 'Signup / Login' button
    // 5. Fill all details in Signup and create account
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue
    // 7. Verify ' Logged in as username' at top
    // 8. Add products to cart
    // 9. Click 'Cart' button
    // 11. Click Proceed To Checkout
    // 12. Verify Address Details and Review Your Order
    // 13. Enter description in comment text area and click 'Place Order'
    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 15. Click 'Pay and Confirm Order' button
    // 16. Verify success message 'Your order has been placed successfully!'
    // 17. Click 'Delete Account' button
    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.placeOrderWhileCheckout()
})

// Place Order: Login before Checkout
Cypress.Commands.add("placeOrderLoginBeforeCheckout",()=>{
    const newdata = require("../fixtures/project1.json");
    cy.registerNewUser(newdata.register.name,newdata.register.email)
    cy.get("[data-qa='continue-button']").click()
    cy.get(".nav.navbar-nav li").eq(3).click()
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click 'Signup / Login' button
    // 5. Fill email, password and click 'Login' button
    cy.LoginUser(newdata.Login.email,newdata.Login.password)
    // 6. Verify 'Logged in as username' at top
    cy.get(".col-sm-8 li").eq(9).should("be.visible");
    // 7. Add products to cart
    cy.get("a[data-product-id='7']").first().click()    
    cy.get('.modal-footer > .btn').click()
    // Click 'Cart' button
    cy.get(".col-sm-8 li").eq(2).click()
    // Verify that cart page is displayed
    cy.log("art page is displayed")
    // Click Proceed To Checkout
    cy.get("div>a").eq(1).click()
    // Click 'Register / Login' button 
    cy.get("p>a>u").first().click()
    // Fill all details in Signup and create account
    // Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.registerNewUser(newdata.register.name,newdata.register.email)
    cy.get("[data-qa='continue-button']").click()
    // Verify ' Logged in as username' at top
    cy.get(".col-sm-8 li").eq(9).should("be.visible");
    // Click 'Cart' button
    cy.get(".col-sm-8 li").eq(2).click()
    // Click 'Proceed To Checkout' button
    cy.get("div>a").eq(1).click()
    // Verify Address Details and Review Your Order
    cy.contains("Address Details",{matchCase:false}).should("be.visible")
    cy.contains("Review Your Order",{matchCase:false}).should("be.visible")
    // Enter description in comment text area and click 'Place Order'
    cy.get('.form-control').type(newdata.Description.text)
    cy.get(':nth-child(7) > .btn').click()
    // Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // Click 'Pay and Confirm Order' button
    cy.payment()
    // Verify success message 'Your order has been placed successfully!'
    // cy.contains("Your order has been placed successfully!",{matchCase:false}).should("be.visible")
    // Click 'Delete Account' button
    cy.get(':nth-child(5) > a').click()
    // Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.contains("ACCOUNT DELETED!",{matchCase:false}).should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
})

// project1 -----> SignUp Custome command
Cypress.Commands.add("signUp",()=> {
    // Click on Signup/Login'button
    cy.visit("https://automationexercise.com/login")
    

})

// date picker
Cypress.Commands.add("selectDatePicker",(day)=>{
    // visit website
    cy.visit('https://www.globalsqa.com/demo-site/datepicker/')
    // find out iframe
    cy.frameLoaded(".demo-frame.lazyloaded")
    // get datepicker element inside the iframe
    cy.iframe(".demo-frame.lazyloaded").find("#datepicker").click()
    // 31- matched elements
    cy.iframe(".demo-frame.lazyloaded").find("td[data-handler='selectDay']")
    .each((ele)=>{
        let datevalue = ele.type()
        if(datevalue==day){
            cy.wrap(ele).click()
        }
        // for(let i=0; i<=datevalue; i++){
        //     cy.wrap(ele).click()
        // }
    })
})

// iframe 3months view calendar
Cypress.Commands.add("iframeMultiViewCalendar",(day)=>{
    cy.visit('https://jqueryui.com/datepicker/#date-range')
        cy.frameLoaded(".demo-frame").should("be.visible")
        cy.iframe(".demo-frame").find(".hasDatepicker").eq(0).scrollIntoView().click()
        cy.iframe(".demo-frame").find(".ui-datepicker-calendar").eq(0).find("tbody>tr>td>a")
        .each((dates)=>{
            let datevalue = dates.text()
            if(datevalue == day){
                cy.wrap(dates).click()
            }
        })

})