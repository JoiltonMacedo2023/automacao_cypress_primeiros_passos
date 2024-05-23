class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            employField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            otherField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            driveLincenseNumber: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            expiryDate: ":nth-child(3) > :nth-child(2) > :nth-child(2)" ,
            dateCloseButton: '.--close',
            selectField: '.oxd-select-text--arrow',
            dateBirth: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            selectGenderField: ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label',
            submitButton: "[type='submit']", 
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLincense, lincenseExpiryDate) {
    cy.get(this.selectorList().employField).clear().type(employeeId)
    cy.get(this.selectorList().otherField).clear().type(otherId)
    cy.get(this.selectorList().driveLincenseNumber).clear().type(driversLincense)
    cy.get(this.selectorList().expiryDate).clear().type(lincenseExpiryDate)
    cy.get(this.selectorList().dateCloseButton).eq(0).click()   
    }
   
    fillStatus(dateOfBirth) {
    cy.get(this.selectorList().selectField).eq(0).click({ force: true })
    cy.get(':nth-child(27) > span').click()
    cy.get(this.selectorList().selectField).eq(1).click({ force: true })
    cy.get(':nth-child(3) > span').click()
    cy.get(this.selectorList().dateBirth).clear().type(dateOfBirth)   
    cy.get(this.selectorList().selectGenderField).click() 
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(1).click({ force: true })
        cy.get('.oxd-toast')
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7',
         'contain', 'Successfully Updated' )      
    }       
    
}

export default MyInfoPage

