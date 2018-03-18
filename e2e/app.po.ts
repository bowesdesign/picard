import { $, $$, browser } from 'protractor';

export class LogPage {
  createUpdateButton = $('.log__create-update-btn');
  listOfUpdates = $('log');
  updateList = $$('.update__item');

  navigateTo() {
    return browser.get('/');
  }
}


export class UpdateFormPage {
  addUpdateButton = $('.update-form__add-update-button');
  private addUpdateTitle = $('.update-form__title');
  private addUpdateText = $('.update-form__text');

  enterTitle(title: string) {
    this.addUpdateTitle.sendKeys(title);
  }

  enterText(text: string) {
    this.addUpdateText.sendKeys(text);
  }
}

export class AuthPage {
  private passwordInput = $('.auth__password');
  loginButton = $('.auth__login-button');
  errorMessage = $('.auth__error');

  enterPassword(password: string) {
    this.passwordInput.clear();
    this.passwordInput.sendKeys(password);
  }
}
