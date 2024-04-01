describe("Handling Alerts using Events",()=>{
    beforeEach(function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it("Simple Alearts",()=>{
        cy.get("[onclick='jsAlert()']").click()
        cy.on("window:alert",(text)=>{
            expect(text).to.contain("I am a JS Alert")

        })
        cy.contains("You successfully clicked an alert").should("be.visible")
    })

    it("Confirmation Alert",()=>{
        cy.get("[onclick='jsConfirm()']").click()
        cy.on("window:confirm",(text)=>{
            expect(text).to.equal("I am a JS Confirm")
        })
        cy.contains("You clicked: Ok").should("be.visible")
    })
    it("Promt Alert",()=>{
        cy.window().then((text)=>{
            cy.stub(text,'prompt').returns("Hello Prompt")
        })
        cy.get("[onclick='jsPrompt()']").click()
    })
})