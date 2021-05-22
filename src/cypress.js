describe("Quotes App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");
  });

  const nameInput = () => cy.get("input[name=name]");
  it("can fill out", () => {
    cy.url().should("include", "localhost");
  });
});
