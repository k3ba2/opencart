/// <reference types="cypress"/>
import { GetElement } from '../POM';
import { SettingPage } from '../POM/settingsPage';
import * as data from '../fixtures/example.json';

const getEl = new GetElement();
const setting = new SettingPage();

describe('Validation when user register account', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Validation', () => {});
});
