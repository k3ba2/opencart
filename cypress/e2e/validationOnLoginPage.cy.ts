/// <reference types="cypress"/>
import { SettingPage } from '../POM/settingsPage';
import * as data from '../fixtures/example.json';

const setting = new SettingPage();

describe('User want login to account with incorrect pass', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	Object.values(data.invalidUser).forEach((users) => {
		it(`${users.case}`, () => {
			setting.goLoginPage();
			setting.validationLogin(users.login, users.pass, users.msg);
		});
	});
});
