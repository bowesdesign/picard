import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let testUtils: TestUtils;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    testUtils = new TestUtils(fixture);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the page title', () => {
    const randomString = Math.random().toString(36).substring(7);
    component.pageTitle = randomString;
    fixture.detectChanges();

    expect(testUtils.getText('.navbar__page-title')).toEqual(randomString);
  });

  describe('when back button is required', () => {
    beforeEach(() => {
      component.showBackBtn = true;
      fixture.detectChanges();
    });

    it('should render back arrow', () => {
      expect(testUtils.getElement('.navbar__back-arrow')).toBeTruthy();
    });

    it('should trigger an event when back button is clicked', (pass) => {
      component.backClicked.subscribe((event) => {
        pass();
      });

      testUtils.getElement('.navbar__back-arrow').nativeElement.click();
    });
  });

  it('should not render back button when it is not required', () => {
    component.showBackBtn = false;
    fixture.detectChanges();

    expect(testUtils.getElement('.navbar__back-arrow')).toBeNull();
  });

});


class TestUtils {
  constructor(private fixture: ComponentFixture<any>) {
    this.fixture = this.fixture;
  }

  getElement(selector: string) {
    return this.fixture.debugElement.query(By.css(selector));
  }

  getText(selector: string) {
    return this.getElement(selector).nativeElement.textContent;
  }
}
