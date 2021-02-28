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
import { CardReportComponent } from 'src/app/shared/ui/cards/report/card-reports/card-report.component';
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
        VotesResultBarComponent
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
});
