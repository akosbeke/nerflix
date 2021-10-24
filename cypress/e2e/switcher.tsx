describe('User switcher page', () => {
  it('should navigate to the proper page', () => {
    cy.visit('/')

    cy.get('main a').each((page) => {
      cy.request(page.prop('href'))
    })
  })
})
