/// <reference types="cypress"/>
import { SettingPage } from '../POM/settingsPage';
import { GetElement } from '../POM';
import * as data from '../fixtures/example.json';

const getEl = new GetElement();
const setting = new SettingPage();

describe('Correct register to opencart', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Register', () => {
		setting.geRegisterPage();
		setting.register(data.registerData.firstName, data.registerData.lastName, data.registerData.email, data.registerData.pass);
		getEl.getSuccessMsg().should('contain.text', 'Your Account Has Been Created!');
	});
});
