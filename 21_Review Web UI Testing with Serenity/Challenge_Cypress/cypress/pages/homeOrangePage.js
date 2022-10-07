class homeOrangePage{

    elements = {
        // ==============login=================== 
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        loginBtn: () => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'),
        // ===========edit_my_info.feature======
        // tabMyInfoBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a').click(),
        tabMyInfoBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]').click(),
        firstnameInput: () => cy.get('[name="firstName"]'),
        lastnameInput: () => cy.get('[name="lastName"]'),
        saveEditMyInfoBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button'),
       // ===========add Employee======
        addBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click(),
        firstnameInput: () => cy.get('[name="firstName"]'),
        lastnameInput: () => cy.get('[name="lastName"]'),
        saveAddEmployeeBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]'),
        //=======================employee_trackers===============
        PerformanceBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[7]/a/span'),
        EmployeeBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/a'),
        AddBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'),
        FirstnameInput: () => cy.get('[name="firstName"]'),
        MiddlenameInput: () => cy.get('[name="middleName"]'),
        LastnameInput: () => cy.get('[name="lastName"]'),
        saveEmployeeTrackersBtn: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]')
    }
    // ==============login===================
    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    // ===================edit_my_info.feature======
    clickMyInfoButton(){
        this.elements.tabMyInfoBtn();
    }
    typeFirstname(firstname){
        this.elements.firstnameInput().type(firstname);
    }
    typeLastname(lastname){
        this.elements.lastnameInput().type(lastname);
    }
    clickSaveEditMyInfoBtn(){
        this.elements.saveEditMyInfoBtn().click();
    }
    //==============search_employee_reports.feature=====
    clickPIMButton(){
        this.elements.tabPIMBtn();
    }
    clickReportsButton(){
        this.elements.tabReportsBtn();
    }
    typeReportname(reportname){
        this.elements.reportnameInput().type(reportname);
    }
    clickSearch(){
        this.elements.searchBtn().click();
    }
    // ===================add Employee======
    clickAddButton() {
        this.elements.addBtn();
    }
    typeFirstname(firstname) {
        this.elements.firstnameInput().type(firstname);
    }
    typeLastname(lastname) {
        this.elements.lastnameInput().type(lastname);
    }
    clickSaveAddEmployee() {
        this.elements.saveAddEmployeeBtn().click();
    }
    //=======================employee_trackers===============
    clickPerformance(){
        this.elements.PerformanceBtn().click();
    }
    clickEmployee(){
        this.elements.EmployeeBtn().click();
    }
    clickAdd(){
        this.elements.AddBtn().click();
    }
    typeFirstName(firstName){
        this.elements.FirstnameInput().type(firstName);
    }
    typeMiddleName(middleName){
        this.elements.MiddlenameInput().type(middleName);
    }
    typeLastName(lastName){
        this.elements.LastnameInput().type(lastName);
    }
    clickSaveEmployeeTrackers(){
        this.elements.saveEmployeeTrackersBtn().click();
    }
}

module.exports = new homeOrangePage();
