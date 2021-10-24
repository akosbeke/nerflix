describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('should run a search when a term is entered', () => {
    const term = 'test'
    cy.findByLabelText(/keresés/i)
      .click()
      .focused()
      .type(`${term}{enter}`)

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/search/${term}`)
    })

    cy.get('a[href="/watch"]:first-child').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/watch')
    })

    cy.findByTitle(/vissza/i)
      .should('exist')
      .click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/search/${term}`)
    })
  })

  it('should show the notification and profile dropdowns', () => {
    const notificationLabel = /értesítések/i
    const profileLabel = /profil/i

    cy.findByLabelText(notificationLabel).trigger('mouseover')

    cy.findByTestId('notification-dropdown').should('be.visible')
    cy.findByTestId('profile-dropdown').should('not.be.visible')

    cy.findByLabelText(notificationLabel).trigger('mouseout')
    cy.findByLabelText(profileLabel).trigger('mouseover')

    cy.findByTestId('notification-dropdown').should('not.be.visible')
    cy.findByTestId('profile-dropdown').should('be.visible')

    cy.findByLabelText(profileLabel).trigger('mouseout')

    cy.findByTestId('profile-dropdown').should('not.be.visible')
  })

  it('should open the watch page if clicked on thumbnail', () => {
    cy.get('a[href="/watch"]').first().click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/watch')
    })
  })

  it('should open a topic page with the correct title', () => {
    const secondMenuItem = 'header nav ul li:nth-child(2) a'

    cy.get(secondMenuItem).then(($link) => {
      cy.get(secondMenuItem).click()
      cy.get('h1').should('have.text', $link.text())
    })
  })

  it('should navigate to the user switcher page if logout is clicked', () => {
    cy.findByLabelText(/profil/i).trigger('mouseover')
    cy.findByText(/kijelentkezés/i).click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
