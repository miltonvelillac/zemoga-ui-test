import { createSelector } from '@ngrx/store';
import { reportAdapter, reportFeatureSelector } from '../report.store';

const { selectAll } = reportAdapter.getSelectors();

export const selectGetAllReporters = createSelector(reportFeatureSelector, selectAll);

export const selectLoadingGetAllReports = createSelector(reportFeatureSelector, (state) => state.loadingGetAllReports);
export const selectLoadingUpdateLikeUnlikeReport = createSelector(reportFeatureSelector, (state) => state.loadingUpdateLikeUnlikeReport);
