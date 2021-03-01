import { Update } from "@ngrx/entity";
import { reportsMock } from "src/app/shared/mocks/report.mock";
import { Report } from "src/app/shared/models/report.model";
import { CloneDataInDeep } from 'typescript-clone-data-in-deep';
import * as ReportActions from '../actions/report.action';
import { ReporState, reportInitialState } from "../report.store";
import { reportReducer } from "./report.reducer";

describe('ReportReducer', () => {
  describe('#GetAllReports', () => {
    it('Should change the loadingGetAllReports from false to true', () => {
      // Arrange:
      const loadingGetAllReports = false;
      const currentState: ReporState = { ...reportInitialState, loadingGetAllReports };
      const action = ReportActions.getAllReports();

      // Act:
      const newState = reportReducer(currentState, action);

      // Assert:
      expect(newState.loadingGetAllReports).toBe(true);
    });

    it(`Should change the loadingGetAllReports from true to false and add the reports`, () => {
      // Arrange:
      const reports: Report[] = [...reportsMock];

      const loadingGetAllReports = true;
      const currentState: ReporState = { ...reportInitialState, loadingGetAllReports };
      const action = ReportActions.getAllReportsSuccess({ reports });

      // Act:
      const newState = reportReducer(currentState, action);

      // Assert:
      expect(newState.loadingGetAllReports).toBe(false);
      expect(newState.ids.length).toEqual(reports.length);
    });

    it(`Should change the loadingGetAllReports from true to false and shouldn't add reports`, () => {
      // Arrange:
      const loadingGetAllReports = true;
      const currentState: ReporState = { ...reportInitialState, loadingGetAllReports };
      const action = ReportActions.getAllReportsFail({ error: undefined });

      // Act:
      const newState = reportReducer(currentState, action);

      // Assert:
      expect(newState.loadingGetAllReports).toBe(false);
      expect(newState.ids.length).toEqual(0);
    });
  });

  describe('#UpdateLikeUnlikeReport', () => {
    it(`Should change the loadingUpdateLikeUnlikeReport from false to true`, () => {
      // Arrange:
      const loadingUpdateLikeUnlikeReport = {id: '', isLoading: false};
      const currentState: ReporState = {
        ...reportInitialState,
        loadingUpdateLikeUnlikeReport
      };
      const action = ReportActions.updateLikeUnlikeReport({ id: '1', vote: 'down' });

      // Act:
      const newState = reportReducer(currentState, action);

      // Assert:
      expect(newState.loadingUpdateLikeUnlikeReport).toEqual({id: '1', isLoading: true});
    });

    it(`Should change the loadingGetAllReports from true to false`, () => {
      // Arrange:
      const loadingGetAllReports = true;
      const currentState: ReporState = {
        ...reportInitialState,
        loadingGetAllReports
      };
      const action = ReportActions.getAllReportsFail({ error: {message: 'error'} });

      // Act:
      const newState = reportReducer(currentState, action);

      // Assert:
      expect(newState.loadingGetAllReports).toEqual(false);
    });
  });

  it(`Should change the loadingUpdateLikeUnlikeReport from true to false and update the specific report`, () => {
    // Arrange:
    const like = 201;
    const reports: Report[] = CloneDataInDeep.clone(reportsMock);
    const report: Report = { ...reports[0], like: 200 };
    const updatedReport: Update<Report> = { id: report.id, changes: { ...report, like } };
    const expectedReport: Report = { ...report, like };

    const loadingUpdateLikeUnlikeReport = {id: '1', isLoading: true};
    const currentState: ReporState = {
      ...reportInitialState,
      loadingUpdateLikeUnlikeReport,
      entities: { [reports[0].id]: reports[0], [reports[1].id]: reports[1] },
      ids: [reports[0].id, reports[1].id]
    };
    const action = ReportActions.updateLikeUnlikeReportSuccess({ id: '1', report: updatedReport });

    // Act:
    const newState = reportReducer(currentState, action);

    // Assert:
    expect(newState.loadingUpdateLikeUnlikeReport).toEqual({id: '1', isLoading: false});
    expect(newState.entities[reports[0].id]).toEqual(expectedReport);
  });

  it(`Should change the loadingUpdateLikeUnlikeReport from true to false when the action fails`, () => {
    // Arrange:
    const loadingUpdateLikeUnlikeReport = {id: '1', isLoading: true};
    const currentState: ReporState = {
      ...reportInitialState,
      loadingUpdateLikeUnlikeReport
    };
    const action = ReportActions.updateLikeUnlikeReportFail({id: '1'});

    // Act:
    const newState = reportReducer(currentState, action);

    // Assert:
    expect(newState.loadingUpdateLikeUnlikeReport).toEqual({id: '1', isLoading: false});
  });

});
