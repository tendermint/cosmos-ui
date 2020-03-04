describe('Navbar test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9999/iframe.html?id=navbar--showcase')
  })
  it('Laptop', () => {
    cy.viewport('macbook-15')
    cy.wait(1000)
    cy.get('.menu .menu__item:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.menu .menu__item:nth-child(2)').click()
    cy.wait(1000)
  })
  it('Phone', () => {
    cy.viewport('iphone-5')
    cy.wait(1000)
    cy.get('.menu .menu__item:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.menu .menu__item:nth-child(2)').click()
    cy.wait(1000)
  })
})