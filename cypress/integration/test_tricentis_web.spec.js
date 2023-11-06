/// <reference types="Cypress" />

describe('Enter Vehicle Data', function() {
    it('verifica o título da aplicação', function() {
        
      cy.visit('http://sampleapp.tricentis.com/101/app.php')
        
      cy.title()
        .should('be.equal', 'Enter Vehicle Data')


    it('Preenche o formulário "Enter vehicle data"')
      cy.preencheFormularioEnterVehicleData()
         
      
    it('Preenche o formulário "Enter insurant data"')
      cy.preencheFormularioEnterInsurantData()


    it('Preenche o formulário "Enter product data"')
      cy.preencheFormularioEnterProductData()


    it('Preenche o formulário "Select price option"')
      cy.preencheFormularioSelectPriceOption()
        
      
    it('Preenche o formulário "Send quote"')
      cy.preencheFormularioSendQuote()     
      
})
})



