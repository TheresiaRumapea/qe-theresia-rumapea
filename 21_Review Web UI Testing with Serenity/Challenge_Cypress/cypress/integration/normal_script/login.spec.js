describe('my login test', function(){
    //buat fungsi menjalankan positive case untuk login
    it('success login', ()=>{
        //navigate ke URL
        //ada di cypress.json variable 'baseUrl'
        cy.visit('/')

        //object username dari website hasil cypress
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    
        //ambil class name dari object username dari website biasa
        cy.get('[name="username"]').type("Admin")

        //ambil class name dari object password dari website biasa
        cy.get('[name="password"]').type("admin123")

        //ambil XPath name dari object button dari website biasa
        // install Xpath => npm install -d cypress-xpath
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

        cy.url().should('contains','web/index.php/pim/viewEmployeeList')
    })
})