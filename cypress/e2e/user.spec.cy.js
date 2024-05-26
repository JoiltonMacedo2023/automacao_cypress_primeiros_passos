import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => { 

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password) 
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(
      chance.first({ nationality: "it"}),
      chance.last({ nationality: "it"}),
      chance.last({ nationality: "it"})
    )
    myInfoPage.fillEmployeeDetails(
      chance.ssn({ dashes: false }),
      chance.ssn({ ssnFour: true }),
      chance.ssn({ ssnFour: true }),
      '2025-07-22'
    )  

    myInfoPage.fillStatus('1981-08-30')
    myInfoPage.saveForm()     
  })
})