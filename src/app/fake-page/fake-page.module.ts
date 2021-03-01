import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakePageComponent } from './fake-page.component';
import { FakePageRoutingModule } from './fake-page-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FakePageComponent
  ],
  imports: [
    CommonModule,
    FakePageRoutingModule,
    SharedModule
  ]
})
export class FakePageModule { }
