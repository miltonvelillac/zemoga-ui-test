import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ReportService } from 'src/app/shared/services/report/report.service';


@Injectable()
export class ReportEffects {

  constructor(private actions$: Actions, public reportService: ReportService) { }
}
