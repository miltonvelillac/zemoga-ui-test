import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVotesUiComponent } from './ui/cards/votes/card-votes-ui/card-votes-ui.component';
import { LightButtonComponent } from './ui/buttons/light-button/light-button.component';



@NgModule({
  declarations: [
    CardVotesUiComponent,
    LightButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardVotesUiComponent
  ]
})
export class SharedModule { }
