describe('Teste exemplo', () => {
  it('deve passar', () => {
    expect(true).to.equal(true)
  })
})

describe('Testes da aplicação', () => {

  it('Deve acessar a página inicial', () => {
    cy.visit('/')
    cy.contains('.github/')
  })

})


