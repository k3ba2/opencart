/// <reference types="cypress"/>
import { GetElement } from "../POM"
import { SettingPage } from "../POM/settingsPage";
import * as data from "../fixtures/example.json"

const getEl = new GetElement();
const setting = new SettingPage();

describe('User can login to opencart site', () => {
    beforeEach(() => {
        cy.visit('/')
    });
   
    it('Correct login', () => {
        setting.goLoginPage();
        setting.login(data.correctUser.login, data.correctUser.pass);
        getEl.getBreadCrumbItem().should('contain.text', 'Account');
    });
});