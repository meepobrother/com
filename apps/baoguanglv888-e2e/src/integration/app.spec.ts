import { getGreeting } from '../support/app.po';

describe('baoguanglv888', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to baoguanglv888!');
  });
});
