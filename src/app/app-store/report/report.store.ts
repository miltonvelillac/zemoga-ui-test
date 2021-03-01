import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";
import { Report } from "src/app/shared/models/report.model";


export const reportAdapter: EntityAdapter<Report> = createEntityAdapter<Report>({
  selectId: (report: Report) => report.id
});

export interface ReporState extends EntityState<Report> {
  loadingGetAllReports: boolean;
  loadingUpdateLikeUnlikeReport: {id: string, isLoading: boolean};
}

export const reportInitialState: ReporState = reportAdapter.getInitialState({
  loadingGetAllReports: false,
  loadingUpdateLikeUnlikeReport: {id: '', isLoading: false}
});

export const reportFeatureKey = 'reports';
export const reportFeatureSelector = createFeatureSelector<ReporState>(reportFeatureKey);
