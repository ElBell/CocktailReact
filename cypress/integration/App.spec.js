describe('App 2 buttons', () =>{
    it('loads with two buttons', () => {
      cy.visit('http://localhost:3000/');
      cy.get('button.ingredient');
      cy.get('button.names');
      })
  });
describe('Click find by ingredient', () => {
  it('goes to the ingredient list page', () => {
      cy.visit('http://localhost:3000/');
      cy.get('button.ingredient').click();
      cy.get('.IngredientCheckbox')
      })
  });
describe('Click find by name', () => {
  it('goes to the ingredient list page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button.names').click();
    cy.get('')
  })
});
