/// <reference types="Cypress" />

describe('Enter Vehicle Data', function() {
    it('verifica o título da aplicação', function() {
        
      cy.visit('http://sampleapp.tricentis.com/101/app.php')
        
      cy.title()
        .should('be.equal', 'Enter Vehicle Data')


    it('preenche o formulario enter vehicle data')
      cy.preencheFormularioEnterVehicleData()
         
      
    it('preenche o formulario enter insurant data')
      cy.preencheFormularioEnterInsurantData()


    it('preenche o formulario enter product data')
      cy.preencheFormularioEnterProductData()


    it('preenche o formulario select price option')
      cy.preencheFormularioSelectPriceOption()
        
      
    it('preenche o formulario send quote')
      cy.preencheFormularioSendQuote()     
      
})
})



