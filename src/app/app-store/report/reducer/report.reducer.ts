import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Report } from "src/app/shared/models/report.model";
import * as ReportActions from '../actions/report.action';

export const reportFeatureKey = 'reports';
export const reportFeatureSelector = createFeatureSelector<ReporState>(reportFeatureKey);

export interface ReporState extends EntityState<Report> {
  loadingGetAllReports: boolean;
  loadingUpdateLikeUnlikeReport: boolean;
}

export const reportAdapter: EntityAdapter<Report> = createEntityAdapter<Report>({
  selectId: (report: Report) => report.id
});

export const reportInitialState: ReporState = reportAdapter.getInitialState({
  loadingGetAllReports: false,
  loadingUpdateLikeUnlikeReport: false
});

export const reportReducer = createReducer(
  reportInitialState,
  on(ReportActions.getAllReports, (state) => ({
    ...state,
    loadingGetAllReports: true
  })),
  on(ReportActions.getAllReportsSuccess, (state, { reports }) => {
    return reportAdapter.setAll(reports || [], {
      ...state,
      loadingGetAllReports: false
    });
  }),
  on(ReportActions.getAllReportsFail, (state) => ({
    ...state,
    loadingGetAllReports: false
  })),
  on(ReportActions.updateLikeUnlikeReport, (state) => ({
    ...state,
    loadingUpdateLikeUnlikeReport: true
  })),
  on(ReportActions.updateLikeUnlikeReportSuccess, (state, { report }) => {
    const newState = { ...state, loadingUpdateLikeUnlikeReport: false };
    return report ? reportAdapter.updateOne(report, newState) : newState
  }),
  on(ReportActions.updateLikeUnlikeReportFail, (state) => ({
    ...state,
    loadingUpdateLikeUnlikeReport: false
  }))
);

