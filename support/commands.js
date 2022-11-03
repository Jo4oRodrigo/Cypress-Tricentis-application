Cypress.Commands.add('preencheFormularioEnterVehicleData', function() {
  cy.get('#make')
    .select('Opel')
    .should('have.value', 'Opel')

  cy.get('#model')
    .select('Motorcycle')
    .should('have.value', 'Motorcycle')
    
  cy.get('#cylindercapacity')
    .should('be.visible').type(2000)   
      
  cy.get('#engineperformance')
    .should('be.visible').type(1000)  

  cy.get('#dateofmanufacture')
    .should('be.visible').type('10/22/2022')

  cy.get('#numberofseats')
    .select('2')
    .should('have.value', '2')

  cy.get(':nth-child(7) > .group > :nth-child(2) > .ideal-radio')
    .should('be.visible')
    .click()

  cy.get('#numberofseatsmotorcycle')
    .select('2')
    .should('have.value', '2')

  cy.get('#fuel')
    .select('Electric Power')
    .should('have.value', 'Electric Power')
   
  cy.get('#payload')
    .should('be.visible').type(1000)

  cy.get('#totalweight')
    .should('be.visible')
    .type(50000)
        
  cy.get('#listprice')
    .should('be.visible')
    .type(100000)

  cy.get('#licenseplatenumber')
    .should('be.visible')
    .type(9876543210)

  cy.get('#annualmileage')
    .should('be.visible')
    .type(100000)

  cy.get('#nextenterinsurantdata')
    .should('be.visible')
    .click()

})

Cypress.Commands.add('preencheFormularioEnterInsurantData', function() {
  cy.get('#firstname')
    .should('be.visible')
    .type('Joao')

  cy.get('#lastname')
    .should('be.visible')
    .type('Santana')
  
  cy.get('#birthdate')  
    .should('be.visible')
    .type('12/06/1981')

  cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio')
    .should('be.visible')
    .click()
      
  cy.get('#streetaddress')
    .should('be.visible')
    .type('1000, Paulista Avenue')
        
  cy.get('#country')
    .select('Brazil')
    .should('have.value', 'Brazil')
          
  cy.get('#zipcode')
    .should('be.visible')
    .type('09988150')
    
  cy.get('#city')
    .should('be.visible')
    .type('São Paulo')

  cy.get('#occupation')
    .select('Farmer')
    .should('have.value', 'Farmer')

  cy.get(':nth-child(4) > .ideal-check')
    .should('be.visible')
    .click()

  cy.get('#website')
    .should('be.visible')
    .type('joaosantana.com')

  cy.get('#nextenterproductdata')
    .should('be.visible')
    .click()

})

Cypress.Commands.add('preencheFormularioEnterProductData', function() {
  cy.get('#startdate')
    .should('be.visible')
    .type('12/25/2022')

  cy.get('#insurancesum')
    .select('15000000')
    .should('have.value', '15000000')
    
  cy.get('#meritrating')
    .select('Bonus 6')
    .should('have.value', 'Bonus 6')
    
  cy.get('#damageinsurance')
    .select('Full Coverage')
    .should('have.value', 'Full Coverage')

  cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check')
    .should('be.visible')
    .click()
    
  cy.get('#courtesycar')
    .select('Yes')
    .should('have.value', 'Yes')
    
  cy.get('#nextselectpriceoption')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('preencheFormularioSelectPriceOption', function() {
  cy.get(':nth-child(3) > .ideal-radio')
      .should('be.visible')
      .click()
        
  cy.get('#nextsendquote')
        .should('be.visible')
        .click()

})

Cypress.Commands.add('preencheFormularioSendQuote', function() {
  
  cy.get('#email')
    .should('be.visible')
    .type('joaosantana@exemplo.com')
    
  cy.get('#phone')
    .should('be.visible')
    .type('1199887766')

  cy.get('#username')
    .should('be.visible')
    .type('joao.santana')

  cy.get('#password')
    .should('be.visible')
    .type('Joao1234')

  cy.get('#confirmpassword')
    .should('be.visible')
    .type('Joao1234')

  cy.get('#Comments')
    .should('be.visible')
    .type('Teste')

  cy.get('#sendemail')
    .should('be.visible')
    .click()
            
  cy.get('h2')
    .should('be.visible')
    .should('be.equal', 'Sending e-mail success!')  


})

