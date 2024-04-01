// import testData from "../fixtures/orangehrm.json";
describe("Using Sessions Concept", () => {
    beforeEach(function(){
        /*
        cy.visit("/web/index.php/auth/login")
        // cy.get("input[name='username']").type('Admin',{log:false})
        cy.get("input[name='username']").type(testData.Username,{log:false})
        // cy.get("input[name='password']").type("admin123",{log:false})
        cy.get("input[name='password']").type(testData.Password,{log:false})
        cy.get("button[type='submit']").click()
        */
           cy.orangeLogin("Admin","admin123")  // Using orangeLogin Cutom command

        
    })
    it("access PIM page", () => {
        cy.visit("/web/index.php/pim/viewEmployeeList")
    })

    it("Access Dashboard page", () => {
        cy.visit("/web/index.php/dashboard/index")
    })

    it("Go to Performance page", () => {
        cy.visit("/web/index.php/performance/searchEvaluatePerformanceReview")
    })

    it("Go to Directory Page", () =>{
        cy.visit("/web/index.php/directory/viewDirectory")
    })
})