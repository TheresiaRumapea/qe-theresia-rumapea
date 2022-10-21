class blibiPage {
    elements = {
       // ==============login===================
       emailInput: () => cy.xpath('//*[@id="user_email"]'),
       passwordInput: () => cy.xpath('//*[@id="user_password"]'),
       loginBtn: () => cy.xpath('/html/body/div[2]/div/div/div/div/form/div[3]/input'),
  
      //  ===============Edit Profile============
      iconProfileButton: () => cy.xpath('//*[@id="popover-avatar-loggedin-menu-desktop"]/button'),
      viewProfileButton: () => cy.xpath('//*[@id="popover-avatar-loggedin-menu-desktop"]/div/div/div/div[2]/ul[1]/li[1]/a'),
      editProfileButton: () => cy.xpath('//*[@id="app"]/div/div[2]/div[1]/div/div/div/div[2]/div/div[1]/div/div[2]/div/div/a'),  
      lastNameInput: () => cy.xpath('//*[@id="user_last_name"]'),
      updateAccountButton: () => cy.xpath('//*[@id="edit_user_7455573"]/div[6]/div/div/input'),
      payPalEmail: () => cy.xpath('//*[@id="user_paypal"]'),
      // =======================Search===============
      searchInput: () => cy.xpath('//*[@id="app"]/div/header/nav/div[2]/form/div[1]/input'),
      searchButton: () => cy.xpath('//*[@id="app"]/div/header/nav/div[2]/form/button[1]'),
      //======================Change Password=========
      accountSettingButton: () => cy.xpath('//*[@id="popover-avatar-loggedin-menu-desktop"]/div/div/div/div[2]/ul[1]/li[3]/a'),
      changePasswordTab: () => cy.xpath('/html/body/div[4]/div/div/div/div[1]/ul/li[5]/a'),
      currentPasswordInput : () => cy.xpath('//*[@id="user_current_password"]'),
      passwordInput: () => cy.xpath('//*[@id="user_password"]'),
      passwordConfirmation: () => cy.xpath('//*[@id="user_password_confirmation"]'),
      changePasswordButton: () => cy.xpath('//*[@id="edit_user_7455573"]/div[4]/input'),
      // =======================Logout===================
      logoutButton: () => cy.xpath('//*[@id="popover-avatar-loggedin-menu-desktop"]/div/div/div/div[2]/ul[2]/li/a')
    };
    
    // ==============login===================
    typeEmail(email) {
      this.elements.emailInput().type(email);
    }
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
    clickButtonLogin() {
      this.elements.loginBtn().click();
    }
    // ==============edit profile===================
    clickIconProfile(){
      this.elements.iconProfileButton().click();
    }
    clickViewProfile(){
      this.elements.viewProfileButton().click();
    }
    clickEditProfile(){
      this.elements.editProfileButton().click();
    }
    typeLastname(lastname){
      this.elements.lastNameInput().type(lastname);
    }
    typePaypalEmail(paypalemail){
      this.elements.payPalEmail().type(paypalemail);
    }
    clickUpdateAccount(){
      this.elements.updateAccountButton().click();
    }
    // =======================Search===============
    typeKeyword(keywordsearch){
      this.elements.searchInput().type(keywordsearch);
    }
    clickSearchButton(){
      this.elements.searchButton().click();
      Cypress.Keyboard.defaults({
        keystrokeDelay: 0,
      })
    }
    // ======================Change Password===========
    clickAccountSetting(){
      this.elements.accountSettingButton().click();
    }
    clickChangePasswordTab(){
      this.elements.changePasswordTab().click();
    }
    typeCurrentPassword(currentPassword){
      this.elements.currentPasswordInput().type(currentPassword);
    }
    typePassword(password){
      this.elements.passwordInput().type(password);
    }
    typePasswordConfirmation(passwordConfirmation){
      this.elements.passwordConfirmation().type(passwordConfirmation);
    }
    clickChangePasswordButton(){
      this.elements.changePasswordButton().click();
    }

    // =======================Log Out===================
    clickButtonLogout(){
      this.elements.logoutButton().click();
    }
   
  }
  module.exports = new blibiPage();
  