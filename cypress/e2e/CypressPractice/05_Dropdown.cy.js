describe("Using Dropdowns",() =>  {
    it("Dropdown with select tag",function(){
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type('standard_user');
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click()
        cy.get(".product_sort_container").select("Price (low to high)")

    })

    it("Validate Auto Complet based Dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("cypress automation");
        cy.contains("cypress automation tool").click()

    })

    it.only("Dynamic Dropdown",() =>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("python")
        cy.get(".wM6W7d").find('span').contains("python download").click()
    })

    it("Orangehrmlive Dropdown", () => {
        // launch page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // Enter username
        cy.get("[name='username']").type("Admin")
        // Enter Password
        cy.get("[name='password']").type("admin123")
        // Click on Login button
        cy.get("div>button").click()
        // click on PIM section
        cy.contains("PIM").click()
        // Job title dropdown validation
        cy.get(".oxd-select-text-input").eq(2).click()
        cy.contains("Automation Tester").click()
        
    })
})