export const VisitUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://dealdone.com.bd/");
    cy.get(".nav-link").eq(1).click();
    cy.wait(2000);
    cy.get(".nav-link").eq(2).click();
    cy.wait(2000);
    cy.get(".nav-link").eq(3).click();
    cy.wait(2000);
    cy.get(".nav-link").eq(4).click();
    cy.wait(2000);
    
    // cy.get(".trial__button").eq(0).click({force:true});
  };
  export const login = (email,password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://app.dealdone.com.bd/login");
    cy.get("#email").eq(0).click().type(email);
    cy.wait(2000);
    cy.get("#password").eq(0).click().type(password);
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
    // cy.get(".nav-item").eq(12).click();
  
  };
  