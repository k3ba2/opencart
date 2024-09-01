import { GetElement } from './index';

const getEl = new GetElement();

export class SettingPage {
	login(login, pass) {
		getEl.getEmailInput().clear().type(login);
		getEl.getPasswordInput().clear().type(pass);
		getEl.getLoginBtn().click();
	}

	validationLogin(login, pass, msg) {
		getEl.getEmailInput().clear().type(login);
		getEl.getPasswordInput().clear().type(pass);
		getEl.getLoginBtn().click();
		getEl.getValidationLoginMsg().contains(msg);
	}

	goLoginPage() {
		getEl.getMyAccountBtn().click();
		getEl.getToLoginBtn().click();
	}

	geRegisterPage() {
		getEl.getMyAccountBtn().click();
		getEl.getToRegisterBtn().click();
	}

	register(name, lastname, email, pass) {
		getEl.getFirstNameInput().clear().type(name);
		getEl.getLastNameInput().clear().type(lastname);
		getEl.getEmailInput().clear().type(email);
		getEl.getPasswordInput().clear().type(pass);

		getEl.getPrivacyPolicyToggle().then((el) => {
			if (el.is(':checked')) {
				return;
			} else {
				cy.wrap(el).click();
			}
		});
        getEl.getContinueBtn().click();
	};

	validationRegister(name, lastname, email, pass, msg) {
		getEl.getFirstNameInput().clear().type(name);
		getEl.getLastNameInput().clear().type(lastname);
		getEl.getEmailInput().clear().type(email);
		getEl.getPasswordInput().clear().type(pass);

		getEl.getPrivacyPolicyToggle().then((el) => {
			if (el.is(':checked')) {
				return;
			} else {
				cy.wrap(el).click();
			}
		});
        getEl.getContinueBtn().click();
		getEl.getValidationRegisterMsg().contains(msg);
	};
}
