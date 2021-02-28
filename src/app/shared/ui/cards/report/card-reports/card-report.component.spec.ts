import { ComponentFixture, TestBed } from '@angular/core/testing';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { LightButtonComponent } from '../../../buttons/light-button/light-button.component';
import { ThumbsRadioComponent } from '../../../radio-btns/thumbs-radio/thumbs-radio.component';
import { VotesResultBarComponent } from '../../../statistics/votes-result-bar/votes-result-bar.component';

import { CardReportComponent } from './card-report.component';

describe('CardReportComponent', () => {
  let component: CardReportComponent;
  let fixture: ComponentFixture<CardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardReportComponent,
        ThumbsRadioComponent,
        LightButtonComponent,
        VotesResultBarComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#thumbSelected', () => {
    beforeEach(() => {
      component.report = {...reportsMock[0]};
    });

    it(`Should set the correct thumbSelected data`, () => {
      // Arrange:
      component.checkedThumb = 'down';
      fixture.detectChanges();

      // Act:
      const radioThumbUp: HTMLElement = fixture.nativeElement.querySelector(`#radioThumbUp-0`);
      radioThumbUp.click();

      // Assert:      
      expect(component.checkedThumb).toBe('up');
    });

    it(`Should set the correct thumbSelected data`, () => {
      // Arrange:
      component.checkedThumb = 'up';
      fixture.detectChanges();

      // Act:
      const radioThumbDown: HTMLElement = fixture.nativeElement.querySelector(`#radioThumbDown-0`);
      radioThumbDown.click();

      // Assert:      
      expect(component.checkedThumb).toBe('down');
    });
  });

  describe('#voteBtn', () => {
    let reportData = {...reportsMock[0]};
    beforeEach(() => {
      component.report = reportData;
    });

    it(`When voteBtn is clicked and the user is voting the text content button changes to Vote again and the thumbsRadio component disappear`, () => {
      // Arrange:
      component.checkedThumb = 'down';
      component.voteAgain = false;
      fixture.detectChanges();

      // Act:
      const voteBtn: HTMLElement = fixture.nativeElement.querySelector(`#voteBtn-0`);
      voteBtn.click();
      component.cdr.detectChanges();

      const thumbsRadio: HTMLElement = fixture.nativeElement.querySelector(`#thumbsRadio-0`);
      const cardImg = fixture.nativeElement.querySelector('#cardImg-0');
      const cardContentInfo = fixture.nativeElement.querySelector('#cardContentInfo-0');

      // Assert:      
      expect(component.voteAgain).toBe(true);
      expect(thumbsRadio).toBeNull();
      expect(voteBtn.textContent).toContain('Vote again');
      expect(cardContentInfo.textContent).toContain('Thank you for voting!');
      expect(cardImg.src).toContain('thumb-down-small.svg');
    });


    it(`When user clicks on like and voteBtn is clicked then should show the thumb-up-small.svg`, () => {
      // Arrange:
      component.checkedThumb = 'up';
      component.voteAgain = false;
      fixture.detectChanges();

      // Act:
      const voteBtn: HTMLElement = fixture.nativeElement.querySelector(`#voteBtn-0`);
      voteBtn.click();
      component.cdr.detectChanges();

      const cardImg = fixture.nativeElement.querySelector('#cardImg-0');

      // Assert:
      expect(cardImg.src).toContain('thumb-up-small.svg');
    });

    it(`When voteBtn is clicked and the user is not voting the text content button changes to Vote now and the thumbsRadio component appear again`, () => {
      // Arrange:
      component.voteAgain = true;
      fixture.detectChanges();

      // Act:
      const voteBtn: HTMLElement = fixture.nativeElement.querySelector(`#voteBtn-0`);
      voteBtn.click();
      component.cdr.detectChanges();

      const thumbsRadio: HTMLElement = fixture.nativeElement.querySelector(`#thumbsRadio-0`);
      const cardContentInfo = fixture.nativeElement.querySelector('#cardContentInfo-0');

      // Assert:      
      expect(component.voteAgain).toBe(false);
      expect(thumbsRadio).not.toBeNull();
      expect(voteBtn.textContent).toContain('Vote now');
      expect(cardContentInfo.textContent).toContain(reportData.description);   
    });
  });
});
