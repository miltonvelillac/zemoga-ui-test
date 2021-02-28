import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';
import { instance, mock } from 'ts-mockito';
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import { HomeContentComponent } from './home-content.component';


describe('HomeContentComponent', () => {
  let component: HomeContentComponent;
  let fixture: ComponentFixture<HomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeContentComponent],
      providers: [
        { provide: ReportHandler, useValue: instance(mock(ReportHandler)) },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    component.reportHandler.getAllReports$ = of();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#askGetAllReports', () => {
    it(`When component is created getAllReports should be called`, () => {
      // Arrange:
      spyOn(component.reportHandler, 'getAllReports');

      // Act:
      fixture.detectChanges();

      // Assert:      
      expect(component.reportHandler.getAllReports).toHaveBeenCalledTimes(1);
    });
  });

  describe('#getAllReports', () => {
    it(`When component is created getAllReports should return data`, () => {
      // Arrange:
      const reports: Report[] = CloneDataInDeep.clone(reportsMock);
      component.reportHandler.getAllReports$ = of(reports);

      // Act:
      fixture.detectChanges();

      // Assert:      
      expect(component.reports).toEqual(reports);
    });
  });
});
