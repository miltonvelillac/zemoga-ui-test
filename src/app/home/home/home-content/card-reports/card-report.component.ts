import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ReportHandler } from 'src/app/app-store/report/handler/report.handler';
import { Report } from 'src/app/shared/models/report.model';
import { SubCollection } from 'src/app/shared/utils/rx/sub-collection';
import { CheckedThumbData } from '../../../../shared/ui/radio-btns/thumbs-radio/thumbs-radio.component';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardReportComponent implements OnInit, OnDestroy {

  @Input() idIndex = 0;
  @Input() report: Report | undefined;
  @Input() loading = false;

  @Output() voteSelection = new EventEmitter<{ id: string, vote: CheckedThumbData }>();

  subs = new SubCollection();

  checkedThumb: CheckedThumbData = 'up';
  nameIcon: string | undefined;
  voteAgain = false;
  voteButtonIsLoading = false;

  constructor(
    public cdr: ChangeDetectorRef,
    public reportHandler: ReportHandler
  ) { }

  ngOnInit(): void {
    this.updateLikeUnlikeActionIsLoading();
    this.successUpdateLikeUnlikeReport();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  thumbSelected(selected: CheckedThumbData): void {
    this.checkedThumb = selected;
  }

  vote(): void {    
    if (this.voteAgain) {
      this.voteAgain = !this.voteAgain;
      return;
    }
    this.voteSelection.emit({ id: this.report?.id || '', vote: this.checkedThumb });
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

  updateLikeUnlikeActionIsLoading(): void {
    this.subs.add = this.reportHandler.loadingUpdateLikeUnlikeReport$.subscribe(
      (isLoadingData) => {
        this.voteButtonIsLoading = isLoadingData.isLoading && isLoadingData.id === this.report?.id;
        this.cdr.detectChanges();
      }
    );
  }

  successUpdateLikeUnlikeReport(): void {
    this.subs.add = this.reportHandler.successUpdateLikeUnlikeReport$.pipe(
      filter(({id}) => this.report?.id === id)
    ).subscribe(
      ({reportChanges}) => {
        if (this.report && reportChanges) {
          this.report = {...this.report, ...reportChanges};
        }
        this.voteAgain = true;
        this.setNameIcon();
        this.cdr.detectChanges();
      }
    );
  }

}
