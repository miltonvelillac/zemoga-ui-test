import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { reportsMock } from 'src/app/shared/mocks/report.mock';
import { Report } from 'src/app/shared/models/report.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit {

  reports: Report[] = reportsMock;

  constructor() { }

  ngOnInit(): void {
  }

  reportElementId(_: number, reportItem: Report): string {
    return reportItem.id;
  }

}
