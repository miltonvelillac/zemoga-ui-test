import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeInfoComponent } from './home/home-info/home-info.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeInfoComponent,
    HomeContentComponent,
    HomeContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
