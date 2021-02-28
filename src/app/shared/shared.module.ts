import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardReportComponent } from './ui/cards/report/card-reports/card-report.component';
import { LightButtonComponent } from './ui/buttons/light-button/light-button.component';
import { ThumbsRadioComponent } from './ui/radio-btns/thumbs-radio/thumbs-radio.component';
import { VotesResultBarComponent } from './ui/statistics/votes-result-bar/votes-result-bar.component';
import { SpinnerComponent } from './ui/loaders/spinner/spinner.component';



@NgModule({
  declarations: [
    CardReportComponent,
    LightButtonComponent,
    ThumbsRadioComponent,
    VotesResultBarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardReportComponent
  ]
})
export class SharedModule { }
