import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightButtonComponent {

  @Input() text = '';

  constructor() { }

}
