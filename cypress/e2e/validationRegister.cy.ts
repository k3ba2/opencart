/// <reference types="cypress"/>
import { SettingPage } from '../POM/settingsPage';
import * as data from '../fixtures/example.json';

const setting = new SettingPage();

describe('Validation when user register account', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	Object.values(data.incorrectRegisterData).forEach(users => {
		it(`${users.case}`, () => {
			setting.geRegisterPage();
			setting.validationRegister(users.firstName, users.lastName, users.email, users.pass, users.msg);
		});
	});
});
