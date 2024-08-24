/// <reference types="cypress"/>
import { GetElement } from "../POM"
import { SettingPage } from "../POM/settingsPage";
import * as data from "../fixtures/example.json"

const getEl = new GetElement();
const setting = new SettingPage();

describe('User forgot password', () => {
    beforeEach(() => {
        cy.visit('/')
    });
   
    it('Forgot password', () => {
        setting.goLoginPage();
        getEl.getForgottenPassBtn().click();
        getEl.getEmailInput().type(data.correctUser.login);
        getEl.getContinueBtn().click();
        getEl.getAlertSucces().should('contain.text', 'Success: Your password has been successfully updated');
        setting.login(data.correctUser.login, data.correctUser.pass);
        getEl.getBreadCrumbItem().should('contain.text', 'Account');
    });
});