import { beforeEach, cy, describe } from 'local-cypress';

describe('Research Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contains', /research/i);
  });
});
