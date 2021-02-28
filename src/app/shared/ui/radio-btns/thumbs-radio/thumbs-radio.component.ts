import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CheckedThumbData = 'up' | 'down';

@Component({
  selector: 'app-thumbs-radio',
  templateUrl: './thumbs-radio.component.html',
  styleUrls: ['./thumbs-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbsRadioComponent {
  @Input() checkedThumb: CheckedThumbData | undefined;

  constructor() { }

}
