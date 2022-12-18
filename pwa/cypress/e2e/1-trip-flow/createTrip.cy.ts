describe('Create Trip', () => {
  it('should create a trip', () => {
    cy.visit(`${Cypress.env('APP_URL')}/trips`)
    cy.get('[data-cy=createChecklist]').click()
    
    cy.get('[data-cy=tripName]').clear()
    cy.get('[data-cy=tripName]').type('Test Trip e2e')
    cy.get('[data-cy=tripDescription]').clear()
    cy.get('[data-cy=tripDescription]').type('Test Trip Description e2e')
    cy.get('[data-cy=tripCategory]').clear()
    cy.get('[data-cy=tripCategory]').type('Hiking e2e')
    cy.get('[data-cy=tripTask]').clear()
    cy.get('[data-cy=tripTask]').type('Test Task e2e')
    cy.get('[data-cy=checkbox]').check()
    cy.get('[data-cy=saveTrip]').click()

})
    it('Should go back to trips', () => {
      cy.url().then((url) => {
        cy.url().should('contain', '/trips')
      })
    })

    it('Should delete the created trip',( ) => {
        cy.get('[data-cy=deleteTrip]').click({force: true,multiple: true}).wait(3000)
        cy.get('[data-cy=deleteTrip]').click({force: true,multiple: true})
    })
})
