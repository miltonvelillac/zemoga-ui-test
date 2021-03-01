import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { instance, mock } from 'ts-mockito';
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import { LightButtonComponent } from '../../../../shared/ui/buttons/light-button/light-button.component';
import { SpinnerComponent } from '../../../../shared/ui/loaders/spinner/spinner.component';
import { ThumbsRadioComponent } from '../../../../shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';
import { VotesResultBarComponent } from '../../../../shared/ui/statistics/votes-result-bar/votes-result-bar.component';

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
        VotesResultBarComponent,
        SpinnerComponent
      ],
      providers: [
        { provide: ReportHandler, useValue: instance(mock(ReportHandler)) },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    component.reportHandler.loadingUpdateLikeUnlikeReport$ = of();
    component.reportHandler.successUpdateLikeUnlikeReport$ = of();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#thumbSelected', () => {
    beforeEach(() => {
      component.report = { ...reportsMock[0] };
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
    let reportData = { ...reportsMock[0] };
    beforeEach(() => {
      component.report = reportData;
    });

    it(`When voteBtn is clicked and the user is voting the text content button changes to Vote again and the thumbsRadio component disappear`, () => {
      // Arrange:
      component.checkedThumb = 'down';
      component.voteAgain = false;
      component.report = { ...reportsMock[0], id: '123' };

      spyOn(component.voteSelection, 'emit');

      fixture.detectChanges();

      // Act:
      const voteBtn: HTMLElement = fixture.nativeElement.querySelector(`#voteBtn-0`);
      voteBtn.click();
      component.cdr.detectChanges();

      // Assert:
      expect(component.voteSelection.emit).toHaveBeenCalledOnceWith({ id: '123', vote: 'down' });
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

  describe('#successUpdateLikeUnlikeReport', () => {
    it(`When successUpdateLikeUnlikeReport subscribe is active then voteAgain value shoud be true and should show the thumb-up-small.svg`, () => {
      // Arrange:
      const id = '123';
      component.report = { ...reportsMock[0], id };
      component.reportHandler.successUpdateLikeUnlikeReport$ = of({id, reportChanges: {like: 10}});
      component.voteAgain = false;
      component.checkedThumb = 'up';

      fixture.detectChanges();

      // Act:
      component.successUpdateLikeUnlikeReport();

      component.cdr.detectChanges();

      const cardImg = fixture.nativeElement.querySelector('#cardImg-0');

      // Assert:
      expect(component.voteAgain).toEqual(true);
      expect(cardImg.src).toContain('thumb-up-small.svg');
    });
  });

  describe('#setNameIcon', () => {
    it(`When setNameIcon is called and checkedThumb is up the component should show thumb-up-small.svg`, () => {
      // Arrange:
      component.report = { ...reportsMock[0] };
      component.checkedThumb = 'up';

      fixture.detectChanges();

      // Act:
      component.setNameIcon();

      component.cdr.detectChanges();

      const cardImg = fixture.nativeElement.querySelector('#cardImg-0');

      // Assert:
      expect(cardImg.src).toContain('thumb-up-small.svg');
    });

    it(`When setNameIcon is called and checkedThumb is down the component should show thumb-down-small.svg`, () => {
      // Arrange:
      component.report = { ...reportsMock[0] };
      component.checkedThumb = 'down';

      fixture.detectChanges();

      // Act:
      component.setNameIcon();

      component.cdr.detectChanges();

      const cardImg = fixture.nativeElement.querySelector('#cardImg-0');

      // Assert:
      expect(cardImg.src).toContain('thumb-down-small.svg');
    });
  });
});
