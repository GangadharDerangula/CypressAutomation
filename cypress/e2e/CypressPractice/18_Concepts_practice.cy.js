describe("Again Pracitce Concepts", ()=> {
    it("Simple Alert Handle", ()=> {
        // Simple Alert Handle
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()
        cy.on("window:alert", (text)=>{
            expect(text).to.equal("I am a JS Alert");
        })
        cy.get("#result").should('have.text','You successfully clicked an alert');
    })
    it("Confirm Alert Handle",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on("window:confirm",(text)=> {
            expect(text).to.equal("I am a JS Confirm") 
        })
    })

    it("Prompt Alert Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((text)=>{
            cy.stub(text,'prompt').returns('Hello')
        })
        cy.get('[onclick="jsPrompt()"]').click()

    })

    it("Dynamin Dropdown", ()=> {
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type("JavaScript Introdunction")
        // cy.get('.wM6W7d').eq(7).click()
        cy.get('.wM6W7d').contains("JavaScript introduction in english",{matchCase:false}).click()
    })

    it.only("Multi-tab's Handling",()=> {
        cy.visit("https://www.cypress.io/")
        // cy.get("#dropdownDocs").invoke("removeAttr","target").click()
        cy.get("#dropdownDocs").invoke('removeAttr','target').click()
        cy.go('back')
        cy.go(1)
    })
})