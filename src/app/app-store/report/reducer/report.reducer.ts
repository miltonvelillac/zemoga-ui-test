import { createReducer, on } from "@ngrx/store";
import * as ReportActions from '../actions/report.action';
import { reportAdapter, reportInitialState } from "../report.store";

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
  on(ReportActions.updateLikeUnlikeReport, (state, { id }) => ({
    ...state,
    loadingUpdateLikeUnlikeReport: { id, isLoading: true }
  })),
  on(ReportActions.updateLikeUnlikeReportSuccess, (state, { id, report }) => {
    const newState = { ...state, loadingUpdateLikeUnlikeReport: { id ,isLoading: false} };
    return report ? reportAdapter.updateOne(report, newState) : newState
  }),
  on(ReportActions.updateLikeUnlikeReportFail, (state, { id }) => ({
    ...state,
    loadingUpdateLikeUnlikeReport: { id, isLoading: false }
  }))
);

