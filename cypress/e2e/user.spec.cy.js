import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboradGrid: ".orangehrm-dashboard-grid",
    credentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    selectField: ".oxd-select-text--arrow",
    selectGenderField: '.oxd-radio-input',
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboradGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Ton')
    cy.get(selectorsList.middleNameField).clear().type('Maxuel')
    cy.get(selectorsList.lastNameField).clear().type('Macedo')
    cy.get(selectorsList.genericField).eq(3).clear().type('employ')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Lincensetest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2024-05-13')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectField).eq(0).click({ force: true })
    cy.get(':nth-child(27) > span').click()
    cy.get(selectorsList.selectField).eq(1).click({ force: true })
    cy.get(':nth-child(3) > span').click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1981-08-30')
    cy.get(selectorsList.selectGenderField).eq(2).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.credentialAlert)

  })
})