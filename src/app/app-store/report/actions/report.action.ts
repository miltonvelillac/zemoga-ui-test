import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { ErrorModel } from "src/app/shared/models/error.model";
import { Report } from "src/app/shared/models/report.model";
import { CheckedThumbData } from "src/app/shared/ui/radio-btns/thumbs-radio/thumbs-radio.component";

export const getAllReports = createAction('[Reports] Get All Reports');
export const getAllReportsSuccess = createAction('[Reports] Get All Reports Success', props<{ reports: Report[] }>());
export const getAllReportsFail = createAction('[Reports] Get All Reports Fail', props<{ error: ErrorModel | undefined }>());

export const updateLikeUnlikeReportSuccess = createAction('[Reports] Update like or unlike Reports Success', props<{ id: string, report: Update<Report> | undefined }>());
export const updateLikeUnlikeReport = createAction('[Reports] Update like or unlike Reports', props<{ id: string, vote: CheckedThumbData }>());
export const updateLikeUnlikeReportFail = createAction('[Reports] Update like or unlike Reports Fail', props<{ id: string }>());
