import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVotesUiComponent } from './ui/cards/votes/card-votes-ui/card-votes-ui.component';



@NgModule({
  declarations: [
    CardVotesUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardVotesUiComponent
  ]
})
export class SharedModule { }
