describe("Using Xpath Concepts",()=>{
    it("Selecting elements using xpath",()=>{
        cy.visit("https://automationexercise.com/")
        // selecting element using nodeName
        cy.xpath("select")
    })
})