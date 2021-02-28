import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';
import { SubCollection } from 'src/app/shared/utils/rx/sub-collection';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit, OnDestroy {

  reports: Report[] = [];

  subs = new SubCollection();

  constructor(
    public reportHandler: ReportHandler,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.askGetAllReports();
    this.getAllReports();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  askGetAllReports() {
    this.reportHandler.getAllReports();
  }

  getAllReports(): void {
    this.subs.add = this.reportHandler.getAllReports$.subscribe(
      (reports: Report[]) => {
        this.reports = reports;
        this.cdr.detectChanges();
      }
    );
  }

  reportElementId(_: number, reportItem: Report): string {
    return reportItem.id;
  }

}
