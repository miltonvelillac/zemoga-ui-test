import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CheckedThumbData } from '../../../radio-btns/thumbs-radio/thumbs-radio.component';

@Component({
  selector: 'app-card-votes-ui',
  templateUrl: './card-votes-ui.component.html',
  styleUrls: ['./card-votes-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardVotesUiComponent implements OnInit {

  @Input() idIndex = 0;

  checkedThumb: CheckedThumbData = 'up';
  nameIcon: string | undefined;
  voteAgain = false;

  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  thumbSelected(selected: CheckedThumbData): void {
    this.checkedThumb = selected;
  }

  vote(): void {
    this.voteAgain = !this.voteAgain;
    if (!this.voteAgain) { return; }
    console.log(this.checkedThumb);
    this.setNameIcon();
  }

  setNameIcon(): void {
    this.nameIcon = this.checkedThumb === 'up' ? 'assets/icons/thumb-up-small.svg' : 'assets/icons/thumb-down-small.svg';
  }

}
