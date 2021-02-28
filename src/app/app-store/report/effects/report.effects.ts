import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Report } from 'src/app/shared/models/report.model';
import { ReportService } from 'src/app/shared/services/report/report.service';
import * as ReportActions from '../actions/report.action';


@Injectable()
export class ReportEffects {

  getAllReports$ = createEffect(() => this.actions$.pipe(
    ofType(ReportActions.getAllReports),
    exhaustMap(() => this.reportService.getAllReports().pipe(
      map((reports: Report[]) => ReportActions.getAllReportsSuccess({ reports })),
      catchError(() => of(ReportActions.getAllReportsFail()))
    ))
  ));

  updateLikeUnlikeReport$ = createEffect(() => this.actions$.pipe(
    ofType(ReportActions.updateLikeUnlikeReport),
    exhaustMap(({id, isLike}) => this.reportService.updateLikeUnlikeReport(id, isLike).pipe(
      map((report: Report | undefined) => ReportActions.updateLikeUnlikeReportSuccess({ report })),
      catchError(() => of(ReportActions.updateLikeUnlikeReportFail()))
    ))
  ));

  constructor(private actions$: Actions, public reportService: ReportService) { }
}
