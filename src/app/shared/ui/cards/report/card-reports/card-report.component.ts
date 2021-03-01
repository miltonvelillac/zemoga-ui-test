import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Report } from 'src/app/shared/models/report.model';
import { SubCollection } from 'src/app/shared/utils/rx/sub-collection';
import { CheckedThumbData } from '../../../radio-btns/thumbs-radio/thumbs-radio.component';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardReportComponent implements OnInit, OnDestroy {

  @Input() idIndex = 0;
  @Input() report: Report | undefined;
  @Input() loadingUpdateLikeUnlikeReport$: Observable<{id: string, isLoading: boolean}> = of({id: '', isLoading: false});

  @Output() voteSelection = new EventEmitter<{ id: string, vote: CheckedThumbData }>();

  subs = new SubCollection();

  checkedThumb: CheckedThumbData = 'up';
  nameIcon: string | undefined;
  voteAgain = false;
  voteButtonIsLoading = false;

  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.updateLikeUnlikeActionIsLoading();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  thumbSelected(selected: CheckedThumbData): void {
    this.checkedThumb = selected;
  }

  vote(): void {
    this.voteAgain = !this.voteAgain;
    if (!this.voteAgain) { return; }
    console.log(this.checkedThumb);
    this.voteSelection.emit({ id: this.report?.id || '', vote: this.checkedThumb });
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

  updateLikeUnlikeActionIsLoading(): void {
    this.subs.add = this.loadingUpdateLikeUnlikeReport$.subscribe(
      (isLoadingData) => {
        this.voteButtonIsLoading = isLoadingData.isLoading && isLoadingData.id === this.report?.id;
        this.cdr.detectChanges();
      }
    );
  }

}
