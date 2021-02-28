import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Update } from '@ngrx/entity';
import { provideMockStore } from '@ngrx/store/testing';
import { of, ReplaySubject, throwError } from 'rxjs';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';
import { ReportService } from 'src/app/shared/services/report/report.service';
import * as ReportActions from '../actions/report.action';
import { ReportEffects } from './report.effects';

describe('ReportEffects', () => {
  let actions$: any;
  let effects: ReportEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReportEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            Vehicles: {}
          }
        }),
        ReportService
      ]
    });

    effects = TestBed.inject(ReportEffects);
  });

  beforeEach(() => {
    actions$ = new ReplaySubject(1);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('#getAllReports', () => {
    it(`Should return a success action called getAllReportsSuccess with reports data`, () => {
      // Arrange
      const reports: Report[] = [ ...reportsMock ];
      const action = ReportActions.getAllReports();
      const actionSuccess: any = ReportActions.getAllReportsSuccess({ reports });

      let resp;

      spyOn(effects.reportService, 'getAllReports').and.returnValue(of(reports));

      // Act
      actions$.next(action);

      effects.getAllReports$.subscribe((response) => resp = response);

      // Assert
      expect(resp).toEqual(actionSuccess);
    });

    it(`Should return a fail action called getAllReportsFail`, () => {
      // Arrange
      const action = ReportActions.getAllReports();
      const actionFail: any = ReportActions.getAllReportsFail();

      let resp;

      spyOn(effects.reportService, 'getAllReports').and.returnValue(throwError(undefined));

      // Act
      actions$.next(action);

      effects.getAllReports$.subscribe((response) => resp = response);

      // Assert
      expect(resp).toEqual(actionFail);
    });

  });

  describe('#updateLikeUnlikeReport', () => {
    it(`Should return a success action called getAllReportsSuccess with reports data`, () => {
      // Arrange
      const report: Report = { ...reportsMock[0], like: 200 };
      const updatedReportFromService: Report = { ...report, like: 201 };
      const updatedReport: Update<Report> = {id: report.id, changes: { ...report, like: 201 }};
      const action = ReportActions.updateLikeUnlikeReport({id: report.id, isLike: true});
      const actionSuccess: any = ReportActions.updateLikeUnlikeReportSuccess({ report: updatedReport });

      let resp;

      spyOn(effects.reportService, 'updateLikeUnlikeReport').and.returnValue(of(updatedReportFromService));

      // Act
      actions$.next(action);

      effects.updateLikeUnlikeReport$.subscribe((response) => resp = response);

      // Assert
      expect(resp).toEqual(actionSuccess);
    });

    it(`Should return a fail action called getAllReportsFail`, () => {
      // Arrange
      const report: Report = { ...reportsMock[0], like: 200 };
      const action = ReportActions.updateLikeUnlikeReport({id: report.id, isLike: true});
      const actionFail: any = ReportActions.updateLikeUnlikeReportFail();

      let resp;

      spyOn(effects.reportService, 'updateLikeUnlikeReport').and.returnValue(throwError(undefined));

      // Act
      actions$.next(action);

      effects.updateLikeUnlikeReport$.subscribe((response) => resp = response);

      // Assert
      expect(resp).toEqual(actionFail);
    });

  });

});
