import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorModel } from '../../models/error.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ErrorComponent {

  @Input() error: ErrorModel | undefined;
  @Input() id = 'errorMessage';
  @Input() idRetryButton = 'errorRetryButton';
  @Output() retry: EventEmitter<void> = new EventEmitter();

  constructor() { }

  retryAction() {
    this.retry.emit();
    this.error = undefined;
  }

}
