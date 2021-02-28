import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-votes-result-bar',
  templateUrl: './votes-result-bar.component.html',
  styleUrls: ['./votes-result-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotesResultBarComponent {
  @Input() likeQuantity = 0;
  @Input() unLikeQuantity = 0;

  constructor() { }

  getLikeUnlikePercentage(data: number): string {
    const totalLikeUnlike = this.likeQuantity + this.unLikeQuantity;
    const result = !totalLikeUnlike ? 0 : data * 100 / (this.likeQuantity + this.unLikeQuantity);
    return result.toFixed(0);
  }

  getWithStyle(data: number): string {
    if (!this.likeQuantity && !this.unLikeQuantity) { return '50%'; }
    const percentage: number = Number(this.getLikeUnlikePercentage(data));
    const percentageToWidth: number = percentage > 75 ? 75 : percentage < 25 ? 25 : percentage;
    return `${percentageToWidth}%`;
  }

}
