describe('edit my info test', function(){
    //buat fungsi menjalankan positive case untuk login
    it('success edit my info', ()=>{
        //navigate ke URL
        //ada di cypress.json variable 'baseUrl'
        cy.visit('/')

        //ambil class name dari object username dari website biasa
        cy.get('[name="username"]').type("Admin")

        //ambil class name dari object password dari website biasa
        cy.get('[name="password"]').type("admin123")

        //ambil XPath name dari object button dari website biasa
        // install Xpath => npm install -d cypress-xpath
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

        cy.url().should('contains','web/index.php/pim/viewEmployeeList')
        // ===================================================================

        //ambil XPath name dari object button tab my info dari website biasa
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a').click()
     
        //ambil class name dari object firstName dari website biasa
        cy.get('[name="firstName"]').type("Paul")

        //ambil class name dari object lastName dari website biasa
        cy.get('[name="lastName"]').type("Ubub")

        //ambil XPath dari object button save dari website biasa
        // install Xpath => npm install -d cypress-xpath
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button').click()

    })
})