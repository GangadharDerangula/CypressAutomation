describe("Automation Exercise Project", () => {

    it("Register User and Delete Account", () => {
        // Using ----> Fixture data
        const testData = require("../../fixtures/project1.json")
        // Using Custom Command ---> registerNewUser_Delete()
        cy.registerNewUser_DeleteAccount(testData.name,testData.email,testData.password);
    })

    it("Login User and Delete Account", () => {
        const newdata = require("../../fixtures/project1.json");
        cy.registerNewUser(newdata.register.name,newdata.register.email);
        cy.loginUser_DeleteAccount(newdata.Login.email,newdata.Login.password);

        
    })

    it("Login User with incorrect email and password", () => {
        const incorrect = require("../../fixtures/project1.json");
        cy.IncorrectLoginMessage(incorrect.Login.email,incorrect.Login.password)


    })

    it("Logout User", function(){
        const newdata = require("../../fixtures/project1.json");
        cy.registerNewUser(newdata.register.name,newdata.register.email);
        cy.logOutUser();
    })

    it(" Register User with existing email", ()=> {
        const user = require("../../fixtures/project1.json").Login;
        cy.existingEmail(user.email,user.password);
    })

    it("Verify Test Cases Page",()=> {
        cy.verifyTestCasePage()
    })

    it("Verify All Products and product detail page",()=> {
        cy.productDetails()
    })

    it("Search Product",()=>{
        cy.productSearch("tshirts")

    })

    it("Verify Subscription in home page",()=>{
        const newdata = require("../../fixtures/project1.json");
        cy.subcription(newdata.email)
    })

    it("Add Products in Cart",()=> {
        cy.addToCart()
    })

    it("Verify Product quantity in Cart",()=>{
        cy.checkProductQuatity()
    })

    it("Place Order: Register while Checkout",()=>{
        cy.placeOrderWhileCheckout()
    })

    it("Place Order: Register before Checkout",()=>{
        cy.placeOrderBeforeCheckout()
    })

    it("Place Order: Login before Checkout",()=>{
        cy.placeOrderLoginBeforeCheckout()
    })



    // Correction Points
    it.only("signUp",()=>{
        cy.signUp()
    })

})