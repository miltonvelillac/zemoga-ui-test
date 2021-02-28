import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from 'src/app/shared/models/report.model';
import { CheckedThumbData } from '../../../radio-btns/thumbs-radio/thumbs-radio.component';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardReportComponent {

  @Input() idIndex = 0;
  @Input() report: Report | undefined;

  @Output() voteSelection = new EventEmitter<{id: string, vote: CheckedThumbData}>();

  checkedThumb: CheckedThumbData = 'up';
  nameIcon: string | undefined;
  voteAgain = false;

  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  thumbSelected(selected: CheckedThumbData): void {
    this.checkedThumb = selected;
  }

  vote(): void {
    this.voteAgain = !this.voteAgain;
    if (!this.voteAgain) { return; }
    console.log(this.checkedThumb);
    this.voteSelection.emit({id: this.report?.id || '', vote: this.checkedThumb});
    this.setNameIcon();
  }

  setNameIcon(): void {
    this.nameIcon = this.checkedThumb === 'up' ? 'assets/icons/thumb-up-small.svg' : 'assets/icons/thumb-down-small.svg';
  }

  getBackgroundImage(): string {
    return `url(${this.report?.img})`;
  }

  getTextInfo(): string {
    return this.voteAgain ? 'Thank you for voting!' : `${this.report?.description}`;
  }

}
