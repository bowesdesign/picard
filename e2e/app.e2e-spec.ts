import { isInChronologicalOrder, LogPage, UpdateFormPage } from './app.po';
import { browser } from 'protractor';

describe('picard App', () => {

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  afterEach(() => {
    browser.waitForAngularEnabled(true);
  });

  it('should add and display updates', () => {
    const logPage = new LogPage();
    const updateFormPage = new UpdateFormPage();

    logPage.navigateTo();
    logPage.createUpdateButton.click();
    expect(updateFormPage.addUpdateButton.isPresent()).toBeTruthy();

    updateFormPage.enterTitle('Holy shit');
    updateFormPage.enterText('this app actually works!');
    updateFormPage.addUpdateButton.click();

    expect(logPage.listOfUpdates.isPresent()).toBeTruthy();
    expect(logPage.updateList.first().getText()).toContain('this app actually works');
  });
});
