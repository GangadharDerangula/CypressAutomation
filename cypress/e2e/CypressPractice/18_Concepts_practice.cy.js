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

    it("Multi-tab's Handling",()=> {
        cy.visit("https://www.cypress.io/")
        // cy.get("#dropdownDocs").invoke("removeAttr","target").click()
        cy.get("#dropdownDocs").invoke("attr",'target',"_self").click()
        cy.go('back')
        cy.go(1)
    })

    it.only("iframe Handling",()=> {

        
        // cy.visit("https://the-internet.herokuapp.com/iframe");

        // APPROACH --- 1
        // cy.get("#mce_0_ifr").then((frame) => {
        //     const fbody = frame.contents().find('#tinymce')
        //     cy.wrap(fbody).clear().type("Hello")
        // })

        // APPROACH ---- 2
        // const fbody = cy.get('#mce_0_ifr').should("be.visible")
        // .its("0.contentDocument.body")
        // .then(cy.wrap)
        // fbody.clear().type("Hello Gangadhar")

        cy.visit("https://www.hyrtutorials.com/p/frames-practice.html")

        cy.get('#frm1').then((frame) => {
            const fbody = frame.contents().find('#selectnav1')
            cy.wrap(fbody).select(3)
        })
        
        
        
    })
})