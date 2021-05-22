describe("Quotes App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");
  });

  const nameInput = () => cy.get("input[name=name]");
  const orderBtn = () => cy.get('button[id="order-button"]');

  it("can navigate", () => {
    cy.url().should("include", "localhost");
  });
  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Be nice to the CSS expert")
      .should("have.value", "Be nice to the CSS expert");
  });
  it("submits with the order button", () => {
    nameInput().type("Lance the DragonTrainer");
    orderBtn().click();
  });
});
