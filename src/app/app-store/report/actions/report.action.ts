import { createAction, props } from "@ngrx/store";
import { Report } from "src/app/shared/models/report.model";

export const getAllReports = createAction('[Reports] Get All Reports');
export const getAllReportsSuccess = createAction('[Reports] Get All Reports Success', props<{ report: Report[] }>());
export const getAllReportsFail = createAction('[Reports] Get All Reports Fail');

export const likeOrUnlikeReport = createAction('[Reports] Update like or unlike Reports', props<{ id: string, isLike: boolean }>());
export const likeOrUnlikeReportSuccess = createAction('[Reports] Update like or unlike Reports Success', props<{ report: Report }>());
export const likeOrUnlikeReportFail = createAction('[Reports] Update like or unlike Reports Fail');
