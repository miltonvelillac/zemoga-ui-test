import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightButtonComponent } from './ui/buttons/light-button/light-button.component';
import { ThumbsRadioComponent } from './ui/radio-btns/thumbs-radio/thumbs-radio.component';
import { VotesResultBarComponent } from './ui/statistics/votes-result-bar/votes-result-bar.component';
import { SpinnerComponent } from './ui/loaders/spinner/spinner.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ErrorComponent } from './ui/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    LightButtonComponent,
    ThumbsRadioComponent,
    VotesResultBarComponent,
    SpinnerComponent,
    ErrorComponent,    
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LightButtonComponent,
    ThumbsRadioComponent,
    VotesResultBarComponent,
    SpinnerComponent,
    ErrorComponent,
    NgxSkeletonLoaderModule,    
    NavBarComponent
  ]
})
export class SharedModule { }
