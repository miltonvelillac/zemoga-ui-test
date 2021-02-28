import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { CheckedThumbData } from 'src/app/shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';
import * as ReportActions from '../actions/report.action';
import * as ReportSelectors from '../selectors/report.selectors';

@Injectable({
  providedIn: 'root'
})
export class ReportHandler {

  getAllReports$ = this.store$.pipe(select(ReportSelectors.selectGetAllReporters));
  loadingGetAllReports$ = this.store$.pipe(select(ReportSelectors.selectLoadingGetAllReports));
  loadingUpdateLikeUnlikeReport$ = this.store$.pipe(select(ReportSelectors.selectLoadingUpdateLikeUnlikeReport));

  constructor(public actions$: Actions, public store$: Store) { }

  getAllReports(): void {
    this.store$.dispatch(ReportActions.getAllReports());
  }

  updateLikeUnlikeReport(id: string, vote: CheckedThumbData): void {
    this.store$.dispatch(ReportActions.updateLikeUnlikeReport({ id, vote }));
  }
}
