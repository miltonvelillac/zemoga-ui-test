import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AppStoreModule } from 'src/app/app-store/app-store.module';
import { ReportEffects } from 'src/app/app-store/report/effects/report.effects';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { reportReducer } from 'src/app/app-store/report/reducer/report.reducer';
import { reportFeatureKey } from 'src/app/app-store/report/report.store';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { LightButtonComponent } from 'src/app/shared/ui/buttons/light-button/light-button.component';
import { CardReportComponent } from 'src/app/home/home/home-content/card-reports/card-report.component';
import { SpinnerComponent } from 'src/app/shared/ui/loaders/spinner/spinner.component';
import { ThumbsRadioComponent } from 'src/app/shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';
import { VotesResultBarComponent } from 'src/app/shared/ui/statistics/votes-result-bar/votes-result-bar.component';
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import { HomeContentComponent } from './home-content.component';


describe('HomeContentComponentDeep', () => {
  let component: HomeContentComponent;
  let fixture: ComponentFixture<HomeContentComponent>;

  let reportService: ReportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeContentComponent,
        CardReportComponent,
        ThumbsRadioComponent,
        LightButtonComponent,
        VotesResultBarComponent,
        SpinnerComponent
      ],
      providers: [
        ReportHandler,
        ReportService
      ],
      imports: [
        AppStoreModule,
        StoreModule.forFeature(reportFeatureKey, reportReducer),
        EffectsModule.forFeature([ReportEffects])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentComponent);
    component = fixture.componentInstance;

    reportService = TestBed.inject(ReportService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#getAllReports', () => {
    it(`When component is created getAllReports should return data`, () => {
      // Arrange:
      const reports: Report[] = CloneDataInDeep.clone(reportsMock);

      spyOn(reportService, 'getAllReports').and.returnValue(of(reports));

      // Act:
      fixture.detectChanges();

      const cardReportComponentDirective = fixture.debugElement.queryAll(By.directive(CardReportComponent));
      const cardTitle = cardReportComponentDirective[1].nativeElement.querySelector('#cardTitle-1');

      // Assert:      
      expect(component.reports).toEqual(reports);
      expect(cardTitle.textContent).toContain(reports[1].title);
    });
  });

  describe('#voteSelection', () => {
    it(`When user selects a thumb option and clicks on vote button the selected option should be selected
            to updateLikeUnlikeReport method in reportService in order to save it in a database`, () => {
      // Arrange:
      const reports: Report[] = CloneDataInDeep.clone(reportsMock);
      const reportUpdated: Report = { ...reports[1], like: reports[1].like + 1 };

      spyOn(reportService, 'updateLikeUnlikeReport').and.returnValue(of(reportUpdated));
      spyOn(reportService, 'getAllReports').and.returnValue(of(reports));

      // Act:
      fixture.detectChanges();

      const cardReportComponentDirective = fixture.debugElement.queryAll(By.directive(CardReportComponent));

      const radioThumbUp: HTMLButtonElement = cardReportComponentDirective[1].nativeElement.querySelector('#radioThumbUp-1');
      radioThumbUp.click();
      
      const voteBtn: HTMLButtonElement = cardReportComponentDirective[1].nativeElement.querySelector('#voteBtn-1');
      voteBtn.click();
      
      component.cdr.detectChanges();

      const thumbsRadio: HTMLElement = cardReportComponentDirective[1].nativeElement.querySelector(`#thumbsRadio-1`);
      const cardImg = cardReportComponentDirective[1].nativeElement.querySelector('#cardImg-1');
      const cardContentInfo = cardReportComponentDirective[1].nativeElement.querySelector('#cardContentInfo-1');

      // Assert:      
      expect(reportService.updateLikeUnlikeReport).toHaveBeenCalledWith(reportUpdated.id, 'up');
      expect(thumbsRadio).toBeNull();
      expect(cardImg.src).toContain('thumb-up-small.svg');
      expect(cardContentInfo.textContent).toContain('Thank you for voting!');
    });    
  });
});
