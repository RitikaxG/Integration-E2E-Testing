describe("Testing app",() => {
    beforeEach(()=>{
        cy.visit("https://app.100xdevs.com")
    })

    it("displays two tdod items by default",() => {
        cy.contains('Login').should('exist')
        cy.contains('Login').click()
        cy.contains('Log in to access paid content!').should('exist',{ timeout : 10000})
        cy.get('#email').scrollIntoView().should('be.visible').type('ritika@gmail.com',{ force: true})

        cy.get('#password').type('password')
        cy.get('button').eq(5).click() // click on the 4th button
        cy.contains('View Course').should('exist',{timeout : 10000 })
    })
})