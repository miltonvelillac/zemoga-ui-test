import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { filter, first, take } from 'rxjs/operators';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { Report } from 'src/app/shared/models/report.model';
import { CheckedThumbData } from 'src/app/shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';
import { SubCollection } from 'src/app/shared/utils/rx/sub-collection';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit, OnDestroy {

  reports: Report[] = [];
  getAllFail: ErrorModel | undefined;

  subs = new SubCollection();

  constructor(
    public reportHandler: ReportHandler,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.askGetAllReports();
    this.getAllReports();
    this.getAllReportsFail();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  askGetAllReports() {
    this.getAllFail = undefined;
    this.reportHandler.getAllReports();
  }

  getAllReports(): void {
    this.subs.add = this.reportHandler.getAllReports$.pipe(
      filter((reports: Report[]) => !!reports && reports.length > 0),
      take(1)
    ).subscribe(
      (reports: Report[]) => {
        this.reports = reports;
        this.cdr.detectChanges();
      }
    );
  }

  getAllReportsFail(): void {
    this.subs.add = this.reportHandler.getAllReportsFail$.subscribe(
      () => this.getAllFail = { message: 'It was not possible to load the reports, please try again' }
    );
  }

  reportElementId(_: number, reportItem: Report): string {
    return reportItem.id;
  }

  voteSelection({ id, vote }: { id: string, vote: CheckedThumbData }): void {
    this.reportHandler.updateLikeUnlikeReport(id, vote);
  }

}
