describe("Login validation", () => {
    it("Should Login with corect credential", () => {
        // Normal way login process

        // Launch page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // userName input
        cy.get("[name='username']").type("Admin")
        // password input
        cy.get("[name='password']").type("admin123")
        // Login button Click
        cy.get("[type='submit']").click()

    })
})