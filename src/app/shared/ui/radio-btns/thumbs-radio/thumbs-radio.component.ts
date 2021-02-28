import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type CheckedThumbData = 'up' | 'down';

@Component({
  selector: 'app-thumbs-radio',
  templateUrl: './thumbs-radio.component.html',
  styleUrls: ['./thumbs-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbsRadioComponent {
  @Input() checkedThumb: CheckedThumbData | undefined;
  @Input() idThumbUp = 'radioThumbUp';
  @Input() idThumbDown = 'radioThumbDown';

  @Output() thumbSelected = new EventEmitter<CheckedThumbData>();

  checkedThumbUp: CheckedThumbData = 'up';
  checkedThumbDown: CheckedThumbData = 'down';

  constructor() { }

  changeThumbSelected(selected: CheckedThumbData): void {
    this.thumbSelected.emit(selected);
  }

}
