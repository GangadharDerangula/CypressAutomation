describe("Using Calendar Concepts", ()=> {
    it("Handling normal Calendars", function(){
        cy.visit("https://commitquality.com/add-product")
        cy.get("#dateStocked").type("1956-12-26")
    })

    it("Handling iframe Calendar",()=> {
        cy.selectDatePicker(14)
        
    })

    it("Handling iframe 3months view calendar",()=>{
        cy.iframeMultiViewCalendar(13)
        
    })

    it.only('paytm travels task ',()=>{
        cy.visit('https://tickets.paytm.com/flights/')

    })
})