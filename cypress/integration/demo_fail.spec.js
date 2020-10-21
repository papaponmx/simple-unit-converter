describe('Mi primer test', () => {
  it('Valida que puedo convertir unidades en mi app', () => {
    const expectedValue = '6.61';
    cy.visit('http://localhost:3000')

    cy.get('input').first()
      .clear()
      .type('3')

    cy.get('#targetInput').then($input => {
      const value = $input[0].value;
      expect(value).to.equal(expectedValue);
    })
  })
})
