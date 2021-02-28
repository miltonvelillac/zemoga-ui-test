import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as ReportActions from '../actions/report.action';

@Injectable({
  providedIn: 'root'
})
export class ReportHandler {

  constructor(public actions$: Actions, public store$: Store) { }

  getAllReports(): void {
    this.store$.dispatch(ReportActions.getAllReports());
  }

  updateLikeUnlikeReport(id: string, isLike: boolean): void {
    this.store$.dispatch(ReportActions.updateLikeUnlikeReport({ id, isLike }));
  }
}
