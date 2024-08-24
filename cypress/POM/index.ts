import locators from './locators';

export class GetElement {
	getMyAccountBtn = () => cy.get(locators.myAccountBtn).contains('My Account');
    getToLoginBtn = () => cy.get(locators.toLoginBtn).contains('Login');
    getToRegisterBtn = () => cy.get(locators.toRegisterBtn).contains('Register');
    getEmailInput = () => cy.get(locators.emailInput);
    getPasswordInput = () => cy.get(locators.passwordInput);
    getFirstNameInput = () => cy.get(locators.firstNameInput);
    getLastNameInput = () => cy.get(locators.lastNameInput);
    getLoginBtn = () => cy.get(locators.loginBtn);
    getValidationMsg = () => cy.get(locators.validationMsg);
    getForgottenPassBtn = () => cy.get(locators.forgottenPassBtn).contains('Forgotten Password');
    getContinueBtn = () => cy.get(locators.continueBtn);
    getAlertSucces = () => cy.get(locators.alertSucces);
    getBreadCrumbItem = () => cy.get(locators.breadcrumbItem);
    getPrivacyPolicyToggle = () => cy.get(locators.privacyPolicyToggle);
    getSuccessMsg = () => cy.get(locators.successMsg);
};
