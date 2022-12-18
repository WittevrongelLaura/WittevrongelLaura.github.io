describe('Login test',()=>{
    it('should login',()=>{
        cy.visit(`${Cypress.env('APP_URL')}/auth/login`)
        cy.get('[data-cy=email]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password]').type(Cypress.env('PASSWORD'))

        cy.get('[data-cy=login]').click()

        cy.url().then((url) => {
            cy.url().should('contain', '/')
        })       
})
})