import { $, $$, browser, by, element, ElementArrayFinder } from 'protractor';

export class LogPage {
  createUpdateButton = $('.log__create-update-btn');
  listOfUpdates = $('log');
  updateList = $$('.update__item');

  navigateTo() {
    return browser.get('/');
  }
}


export class UpdateFormPage {
  addUpdateButton = element(by.css('.update-form__add-update-button'));
  addUpdateTitle = element(by.css('.update-form__title'));
  addUpdateText = element(by.css('.update-form__text'));

  enterTitle(title: string) {
    this.addUpdateTitle.sendKeys(title);
  }

  enterText(text: string) {
    this.addUpdateText.sendKeys(text);
  }
}
