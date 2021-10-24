/// <reference types="cypress" />

import '@testing-library/cypress/add-commands'

import './commands'

declare namespace Cypress {
  interface Chainable {}
}
