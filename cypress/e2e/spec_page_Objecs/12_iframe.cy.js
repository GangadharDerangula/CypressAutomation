describe("Using iFrame Concept", () => {
    // Tesing the iframe 
    it("Approach - 1: Testing iFrme", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.get("#mce_0_ifr").then((iframe) => {
            let iframeActive  = iframe.contents().find("#tinymce")
            cy.wrap(iframeActive).clear().type("Approach:1 is Successfull")
        })        
    }) 

    it("Approach: 2", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        let ifbody = cy.get("#mce_0_ifr").its("0.contentDocument.body").then(cy.wrap)
        ifbody.clear().type("Approach:2 is Successfull")
    
    })

    it("iFrame Using Custome Commands", function() {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.iFrame('#mce_0_ifr').clear().type("Approach:3 is Successfull")
    })

    it.only("Finding the element inside the iframe", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // select the iframe element
        cy.get("#mce_0_ifr").then((ifele) => {
            // get the document inside the iframe
            let iframeBody = ifele.contents().find('body')
            // Use cy.get() within the iframe document to locate and interact with elements
            cy.wrap(iframeBody).within(()=> {
                cy.get("body")

            })
        })

    })
})