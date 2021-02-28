import { createAction, props } from "@ngrx/store";
import { Report } from "src/app/shared/models/report.model";

export const getAllReports = createAction('[Reports] Get All Reports');
export const getAllReportsSuccess = createAction('[Reports] Get All Reports Success', props<{ reports: Report[] }>());
export const getAllReportsFail = createAction('[Reports] Get All Reports Fail');

export const updateLikeUnlikeReport = createAction('[Reports] Update like or unlike Reports', props<{ id: string, isLike: boolean }>());
export const updateLikeUnlikeReportSuccess = createAction('[Reports] Update like or unlike Reports Success', props<{ report: Report | undefined }>());
export const updateLikeUnlikeReportFail = createAction('[Reports] Update like or unlike Reports Fail');
