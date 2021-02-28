import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { reportsMock } from '../../mocks/report.mock';
import { Report } from '../../models/report.model';
import { StoragaManagment } from '../../utils/storage/storaga.class';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  storageName = 'reports';

  constructor() { }

  getAllReports(): Observable<Report[]> {
    let reports: Report[] = StoragaManagment.getLocalStorage(this.storageName);
    if (!reports) {
      StoragaManagment.saveLocalStorage(this.storageName, reportsMock);
      reports = reportsMock;
    }
    return of(reports).pipe(delay(1000));
  }

  updateLikeUnlikeReport(id: string, isLike: boolean): Observable<Report | undefined> {
    const reports: Report[] = StoragaManagment.getLocalStorage(this.storageName);
    let updatedReport: Report | undefined;
    const reportToUpdate = reports.map(report => {
      if (report.id === id) {
        updatedReport = isLike ? {...report, like: report.like++} : {...report, unlike: report.unlike++};
        return updatedReport;
      }
      return report;
    });
    StoragaManagment.saveLocalStorage(this.storageName, reportToUpdate);
    return of(updatedReport).pipe(delay(1000));
  }
}
