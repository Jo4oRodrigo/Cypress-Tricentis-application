/* eslint-disable no-undef */
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'

const name = faker.name.firstName()
const lastName = faker.name.lastName()

describe('Tricentis Vehicle insurance application', () => {
    it('Visit application', () => {
        cy.visit(Cypress.env('baseUrl'))

        cy.title().should('be.equal', 'Enter Vehicle Data')
    })

    it('Fill "Enter vehicle data" form', () => {
        const today = new Date()
        const day = today.getDate().toString().padStart(2, '0')
        const month = (today.getMonth() + 1).toString().padStart(2, '0')
        const year = today.getFullYear().toString()
        const date = `${month}/${day}/${year}`

        const cylinderCapacity = Math.floor(Math.random() * 2000) + 1
        const enginePerformance = Math.floor(Math.random() * 2000) + 1
        const payload = Math.floor(Math.random() * 1000) + 1
        const totalWeight = Math.floor(Math.random() * 50000) + 100
        const listPrice = Math.floor(Math.random() * 100000) + 500
        const license = Math.floor(Math.random() * 10)
        const mileAge = Math.floor(Math.random() * 100000) + 100

        cy.get('#make').find('option').then((elements) => {
            const make = Math.floor(Math.random() * elements.length)
            cy.get('#make').select(elements.eq(make).val())
        })

        cy.get('#model').find('option').then((elements) => {
            const model = Math.floor(Math.random() * elements.length)
            cy.get('#model').select(elements.eq(model).val())
        })

        cy.get('#cylindercapacity')
            .should('be.visible').type(cylinderCapacity)

        cy.get('#engineperformance')
            .should('be.visible').type(enginePerformance)

        cy.get('#dateofmanufacture')
            .should('be.visible').type(date)

        cy.get('#numberofseats').find('option').then((elements) => {
            const numberOfSeats = Math.floor(Math.random() * elements.length)
            cy.get('#numberofseats').select(elements.eq(numberOfSeats).val())
        })

        cy.get(':nth-child(7) > .group > :nth-child(2) > .ideal-radio')
            .should('be.visible')
            .click()

        cy.get('#numberofseatsmotorcycle').find('option').then((elements) => {
            const numberOfSeatsMotorcycle = Math.floor(Math.random() * elements.length)
            cy.get('#numberofseatsmotorcycle').select(elements.eq(numberOfSeatsMotorcycle).val())
        })

        cy.get('#fuel').find('option').then((elements) => {
            const fuel = Math.floor(Math.random() * elements.length)
            cy.get('#fuel').select(elements.eq(fuel).val())
        })

        cy.get('#payload')
            .should('be.visible').type(payload)

        cy.get('#totalweight')
            .should('be.visible').type(totalWeight)

        cy.get('#listprice')
            .should('be.visible').type(listPrice)

        cy.get('#licenseplatenumber')
            .should('be.visible').type(license)

        cy.get('#annualmileage')
            .should('be.visible').type(mileAge)

        cy.get('#nextenterinsurantdata')
            .should('be.visible')
            .click()
    })

    it('Fill "Enter insurant data" form', () => {
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()
        const randomYears = Math.floor(Math.random() * 53) + 18
        today.setFullYear(year - randomYears)
        const dayStr = day.toString().padStart(2, '0')
        const monthStr = month.toString().padStart(2, '0')
        const yearStr = today.getFullYear().toString()
        const birthDate = `${monthStr}/${dayStr}/${yearStr}`

        const streetAdress = '1000, Paulista Avenue'
        const zipCode = Math.floor(Math.random() * 100000000)

        cy.get('#firstname')
            .should('be.visible').type(name)

        cy.get('#lastname')
            .should('be.visible').type(lastName)

        cy.get('#birthdate')
            .should('be.visible').type(birthDate)

        cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio')
            .should('be.visible').click()

        cy.get('#streetaddress')
            .should('be.visible').type(streetAdress)

        cy.get('#country').then(($country) => {
            const options = $country.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomCountryValue = options.eq(randomIndex).val()
            cy.get('#country').select(randomCountryValue)
        })

        cy.get('#zipcode')
            .should('be.visible').type(zipCode)

        cy.get('#city')
            .should('be.visible').type('São Paulo')

        cy.get('#occupation').then(($occupation) => {
            const options = $occupation.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomOccupationValue = options.eq(randomIndex).val()
            cy.get('#occupation').select(randomOccupationValue)
        })

        cy.get(':nth-child(4) > .ideal-check')
            .should('be.visible').click()

        cy.get('#website')
            .should('be.visible').type(`${name}.com`)

        cy.get('#nextenterproductdata')
            .should('be.visible')
            .click()
    })

    it('Fill "Enter product data" form', () => {
        const today = new Date()
        today.setDate(today.getDate() + 45)
        const day = today.getDate().toString().padStart(2, '0')
        const month = (today.getMonth() + 1).toString().padStart(2, '0')
        const year = today.getFullYear().toString()
        const futureDate = `${month}/${day}/${year}`

        cy.get('#startdate')
            .should('be.visible').type(futureDate)

        cy.get('#insurancesum').then(($insuranceSum) => {
            const options = $insuranceSum.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomInsuranceSum = options.eq(randomIndex).val()
            cy.get('#insurancesum').select(randomInsuranceSum)
        })

        cy.get('#meritrating').then(($meritRating) => {
            const options = $meritRating.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomMeritRating = options.eq(randomIndex).val()
            cy.get('#meritrating').select(randomMeritRating)
        })

        cy.get('#damageinsurance').then(($damageInsurance) => {
            const options = $damageInsurance.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomDamageInsurance = options.eq(randomIndex).val()
            cy.get('#damageinsurance').select(randomDamageInsurance)
        })

        cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check')
            .should('be.visible')
            .click()

        cy.get('#courtesycar').then(($select) => {
            const randomIndex = Math.floor(Math.random() * 2)
            const options = $select.find('option')
            cy.get(options[randomIndex]).invoke('val').then((value) => {
                cy.get('#courtesycar').select(value)
            })
        })

        cy.get('#nextselectpriceoption')
            .should('be.visible')
            .click()
    })

    it('Fill "Select price option" form', () => {
        cy.get(':nth-child(3) > .ideal-radio')
            .should('be.visible').click()

        cy.get('#nextsendquote')
            .should('be.visible').click()
    })

    it('Fill "Send quote" form', () => {
        const phone = Math.floor(Math.random() * 10000000000)
        const password = faker.internet.password()

        cy.get('#email')
            .should('be.visible').type(`${name}@exemplo.com`)

        cy.get('#phone')
            .should('be.visible').type(phone)

        cy.get('#username')
            .should('be.visible').type(`${name}.${lastName}`)

        cy.get('#password')
            .should('be.visible').type(password)

        cy.get('#confirmpassword')
            .should('be.visible').type(password)

        cy.get('#Comments')
            .should('be.visible').type('Teste')

        cy.get('[name="Send E-Mail"]')
            .should('be.visible').click()

        cy.get('.sweet-alert').then(($alert) => {
            cy.wrap($alert).should('be.visible')
        })

        cy.get('.confirm')
            .should('be.visible').click()
    })
})
