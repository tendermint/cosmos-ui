describe('Modal test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9999/iframe.html?id=modal--center')
  })
  it('Laptop', () => {
    cy.viewport('macbook-15')
    cy.wait(2000)
    cy.get('.button__cancel').click()
    cy.wait(2000)
  })
  it('Phone', () => {
    cy.viewport('iphone-5')
    cy.wait(2000)
    cy.get('.button__cancel').click()
    cy.wait(2000)
  })
})