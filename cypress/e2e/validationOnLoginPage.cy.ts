/// <reference types="cypress"/>
import { GetElement } from '../POM';
import { SettingPage } from '../POM/settingsPage';
import * as data from '../fixtures/example.json';

const getEl = new GetElement();
const setting = new SettingPage();

describe('User want login to account with incorrect pass', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	Object.values(data.invalidUser).forEach((users) => {
		it(`${users.case}`, () => {
			setting.goLoginPage();
			setting.validation(users.login, users.pass, users.msg);
		});
	});
});
