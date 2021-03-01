import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightButtonComponent } from '../buttons/light-button/light-button.component';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorComponent,
        LightButtonComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show a message error', () => {
    // Arrange:
    component.error = { message: 'There is an error' };

    // Act:
    fixture.detectChanges();
    const errorGetAll: HTMLElement = fixture.nativeElement.querySelector('#errorMessage');

    // Assert:
    expect(errorGetAll.textContent).toContain(component.error.message);
  });

  it('should emit a retry event when retry button is clicked', () => {
    // Arrange:
    component.error = { message: 'There is an error' };
    spyOn(component.retry, 'emit');

    // Act:
    fixture.detectChanges();
    const errorRetryButton: HTMLButtonElement = fixture.nativeElement.querySelector('#errorRetryButton');
    errorRetryButton.click();

    // Assert:
    expect(component.retry.emit).toHaveBeenCalled();
    expect(component.error).toBeUndefined();
  });
});
