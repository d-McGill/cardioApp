// https://docs.cypress.io/api/introduction/api.html

describe('Home Page Render', () => {
  it('Visits home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Cardio App')
  })
})

describe('Home Page Button tests', () => {
  it('Login Button Destination', () => {
    cy.visit('/')
    cy.get('.loginButton').click()
    cy.url().should('be.equal', `http://localhost:8080/login`)
  })
  it('Register Button Destination', () => {
    cy.visit('/')
    cy.get('.RegisterButton').click()
    cy.url().should('be.equal', `http://localhost:8080/register`)
  })
  it('Help Button Destination', () => {
    cy.visit('/')
    cy.get('.helpButton').click()
    cy.url().should('be.equal', `http://localhost:8080/help`)
  })
  it('Dark Mode', () => {
    cy.visit('/')
    cy.get('.toggle').click()
  })
})
