/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {

  beforeEach(() => {
    // preciso inicializar as rotas antes de cada teste? -> Não, somente uma vez
    // o que acontece se eu mudar o apelido de uma rota? -> Contrato

    // Preparação
    cy.backgroundLogin()
    articles.acessarFormularioDeNovaPublicacao()
  });

  it('Criar uma nova publicação', () => {
    // Ação
    articles.preencherFormulario()
    articles.submeterPublicacao()

    // Verificação
    articles.verificarSeAPublicacaoFoiCriadaComSucesso()

 
  });
});

  // hooks -> momentos antes / depois do teste
  // before / beforeEach
  // after / afterEach

  // AAA -> Arrange Act Assert
  // PAV -> Preparação Ação Verificação