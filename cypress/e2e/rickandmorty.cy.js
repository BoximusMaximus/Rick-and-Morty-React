describe('Making sure its all there', () => {
  it('Should have working navbar', () => {
    cy.visit('/')
    cy.contains("Home").click()
    cy.contains("About").click()
    cy.url().should('include', '/about')
    cy.visit('/')
    cy.contains("Characters").click()
    cy.url().should('include', '/characters')
  })

  it('Should have Rick Sanchez as the template for Characters', () => {
    cy.visit('/characters')
    cy.contains("Rick Sanchez")
    cy.get('.card-img-top').contains('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzxWyKSwIFu_27w-6ZjbfHFimV274RrSDhoPXVD3h2Q&s=10')
  })
})
