class registerPlaceOrder{
    selectItem(){
        return cy.xpath('(//div[@class="picture"])[6]')
    }
    addtoCart(){
        return cy.xpath('//button[@id="add-to-cart-button-18"]')
    }
    shoppingCart(){
        return cy.xpath('//span[@class="cart-label"]')
    }
    agreeCheckBox(){
        return cy.xpath('//input[@id="termsofservice"]')
    }
    checkoutBtn(){
        return cy.xpath('//button[@id="checkout"]')
    }
}
const registPlaceOrderObj = new registerPlaceOrder()
export default registerPlaceOrder

// Custom Command for add to cart
Cypress.Commands.add("selectItem",()=>{
    // HTC Andriod Mobile select
    registPlaceOrderObj.selectItem().click()
})

// Item into AddtoCart
Cypress.Commands.add("itemIntoAddToCart",()=>{
    // item into addtocart
    cy.wait(3000)
    registPlaceOrderObj.addtoCart().click({force:true})
})
// Check Shopping Cart
Cypress.Commands.add("checkShoppingCart",()=>{
    registPlaceOrderObj.shoppingCart().click()
})

// Agree The Check Box
Cypress.Commands.add("selectAgreeCheckBox",()=>{
    registPlaceOrderObj.agreeCheckBox().check()
})

// Click On checkOut Button
Cypress.Commands.add("clickOnCheckoutButton",()=>{
    registPlaceOrderObj.checkoutBtn().click()
})