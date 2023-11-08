/// <reference types='cypress' />

describe('Web Tables page', () => {
  beforeEach(() => {
  cy.visit('/');
});

it('Pagination on the page', () => {
  cy.contains('.-pagination', 'Previous')
    .should('exist');
  cy.contains('.-pagination', 'Next')
    .should('exist');
  cy.contains('.-pagination', 'Page')
    .should('exist');
  });

it('Should have the ability to add worker', () => {
  cy.contains('.btn', 'Add')
    .click();
  cy.get('#firstName')
    .type('Rosa');
  cy.get('#lastName')
    .type('Winters');
  cy.get('#userEmail')
    .type('rowisa@yep.com');
  cy.get('#age')
    .type('18');
  cy.get('#salary')
    .type('5600');
  cy.get('#department')
    .type('Cepka');
  cy.get('#submit')
    .click();

  cy.contains('.rt-td', 'Rosa', 'Winters', '18', '5600', 'Cepka')
    .should('exist');
});

it('Should have the ability to change rows count selection', () => {
  cy.get('[aria-label="rows per page"]').select('10')
    .should('contain', '10 rows');
  });

it('Should have the ability to delete worker', () => {
  cy.get('#delete-record-3')
    .click();
  });

it('Should have the ability to delete all workers', () => {
  cy.get('#delete-record-1')
    .click();
  cy.get('#delete-record-2')
    .click();
  cy.get('#delete-record-3')
    .click();

  cy.contains('.rt-noData', 'No rows found')
    .should('exist');
  });

it('Should have the ability to search a worker, edit it and validate data in the worker row', () => {
  cy.get('#searchBox')
    .type('Cierra');
  cy.get('#basic-addon2')
    .click();
  cy.get('#edit-record-1')
    .click();
  cy.get('#firstName')
    .clear()
    .type('Zozulya');
  cy.get('#submit')
    .click();

  cy.contains('.rt-td', 'Zozulya')
    .should('exist')
});

it('Should have the ability to search by all column values', () => {
  cy.get('#searchBox')
    .type('Alden');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  cy.get('#searchBox')
    .type('Cantrell');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  cy.get('#searchBox')
    .type('45');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  cy.get('#searchBox')
    .type('alden@example.com');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  cy.get('#searchBox')
    .type('12000');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  cy.get('#searchBox')
    .type('Compliance');
  cy.get('#basic-addon2')
    .click();
  cy.get('#searchBox')
    .clear();
  });
});
