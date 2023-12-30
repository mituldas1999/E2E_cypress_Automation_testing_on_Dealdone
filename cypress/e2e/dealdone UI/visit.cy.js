
describe("visit dealdone ui web",()=>{
    it("should be visit on  the landing page of dealdone",()=>{
        cy.VisitUI();
        cy.login("seller@dealdone.com.bd","^seller123!!");
    });
});